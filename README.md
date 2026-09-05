# UID Live Simulator

Elin の UID 装備抽選を、Sourceシートから生成した装備マスタでブラウザ内に再現するサイトです。

- `.NET System.Random` のシード付きアルゴリズムを TypeScript で再現
- `Rand.rnd(2)`、rarity 判定、`SpawnList.Get("eq").Select(50)` のカテゴリ選択と最大100回の再抽選を実装
- 装備マスタは `EA 23.342 Patch 1` の `SourceExport` から抽出した静的 JSON（約9KB）
- 外部API・サーバー処理・スキャンCSVは不使用

## ローカル実行

```bash
npm install
npm run dev
```

## ゲーム更新時の装備マスタ再生成

```powershell
.\tools\BuildSourceData.ps1 "D:\SteamLibrary\steamapps\common\Elin\SourceExport\EA 23.342 Patch 1"
```

`SourceCategory.csv` と `SourceThing.csv` を読み、元の行順を保った `public/eq-items.json` を生成します。生成後はScannerの実測結果と照合してから公開します。

## 注意

`EA 23.342 Patch 1` の実測Scanner出力1,000件との照合で不一致0件を確認しています。ゲーム本体の更新や導入MODがSource／SpawnListを変更した場合は、装備マスタの再生成と再検証が必要です。
