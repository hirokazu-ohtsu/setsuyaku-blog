# かずっちの固定費見直し帳

Astro製の静的ブログです。`main` ブランチに入ると、GitHub Actions が GitHub Pages に自動で公開します。

## 記事の公開のしかた

1. `src/content/posts/` の記事ファイルを開く
2. 【　】や `<!-- -->` のメモを、自分の体験・金額に書き換える
3. 先頭の `draft: true` を `draft: false` にする

`draft: true` の記事は公開サイトには出ません。

## はじめの設定（1回だけ）

GitHub のリポジトリ → Settings → Pages → 「Build and deployment」の Source を **GitHub Actions** にする。

## 独自ドメインを使うとき

Actions の環境変数に `SITE_URL=https://（ドメイン）` と `BASE_PATH=/` を設定し、`public/CNAME` にドメインを書く。

## 手元で確認する

```
npm install
npm run dev        # 下書きも表示されます
```
