# UID Live Simulator

Elin の UID 装備抽選を、CSV検索なしでブラウザ内に再現する実験サイトです。

- `.NET System.Random` のシード付きアルゴリズムを TypeScript で再現
- `Rand.rnd(2)`、rarity 判定、`SpawnList.Get("eq").Select(50)` 相当を実装
- 装備マスタは `EA 23.342 Patch 1` の `SourceExport` から抽出した静的 JSON（約9KB）
- 外部API・サーバー処理・スキャンCSVは不使用

## ローカル実行

```bash
npm install
npm run dev
```

## 注意

ゲーム本体や導入MODが SpawnList を変更した場合、装備結果が一致しない可能性があります。rarity とドロップ有無を含む乱数列は現行スキャナと同じ呼び出し順です。
