param(
    [Parameter(Mandatory = $true)][string]$SourceExportDirectory,
    [string]$OutputPath = (Join-Path $PSScriptRoot "..\public\eq-items.json")
)

$categoryPath = Join-Path $SourceExportDirectory "SourceCategory.csv"
$thingPath = Join-Path $SourceExportDirectory "SourceThing.csv"
if (-not (Test-Path -LiteralPath $categoryPath) -or -not (Test-Path -LiteralPath $thingPath)) {
    throw "SourceCategory.csv and SourceThing.csv are required."
}

$parents = @{}
Import-Csv -LiteralPath $categoryPath |
    Where-Object id -ne "string" |
    ForEach-Object { $parents[$_.id] = $_._parent }

function Test-Category([string]$Category, [string]$Root) {
    $seen = @{}
    while ($Category -and -not $seen[$Category]) {
        if ($Category -eq $Root) { return $true }
        $seen[$Category] = $true
        $Category = $parents[$Category]
    }
    return $false
}

$items = @(
    Import-Csv -LiteralPath $thingPath | Where-Object {
        $_.chance -ne "int" -and
        [int]$_.chance -gt 0 -and
        ((Test-Category $_.category "weapon") -or (Test-Category $_.category "armor")) -and
        -not (Test-Category $_.category "ammo") -and
        -not (Test-Category $_.category "lightsource") -and
        -not (Test-Category $_.category "throw")
    } | ForEach-Object {
        [ordered]@{
            id = $_.id
            name = $_.name_JP
            lv = [int]$_.LV
            chance = [int]$_.chance
            group = if (Test-Category $_.category "weapon") { "weapon" } else { "armor" }
        }
    }
)

$fullOutputPath = [IO.Path]::GetFullPath($OutputPath)
[IO.Directory]::CreateDirectory([IO.Path]::GetDirectoryName($fullOutputPath)) | Out-Null
[IO.File]::WriteAllText($fullOutputPath, ($items | ConvertTo-Json -Compress), [Text.UTF8Encoding]::new($false))
Write-Host "Generated $($items.Count) equipment rows: $fullOutputPath"
