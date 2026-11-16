# 修正内容(Midnight-Recipes-main__1_.zip に対して)

使い方: このフォルダの中身を、リポジトリ直下へ同じ相対パスで上書きコピー → `sh cleanup.sh` → push。

## 重大バグ
- `assets/js/app.js`: `schemaDate()` が `showReviews()` の try ブロック内に宣言されていたため、`addRecipeJsonLd()` が全16レシピで「schemaDate is not defined」になっていました(JSON-LD が出ない、レビュー一覧が「Unable to load shared reviews」になる)。トップレベルに移動し、`2026-09-27` 形式の日付も扱えるようにしました。

## SEO
- 静的プリレンダリング: `.github/scripts/prerender-recipes.js`(新規)が `recipes/<slug>/index.html` を生成。title / description / canonical / OGP / JSON-LD / 本文を HTML に直接出力。Supabase の評価はビルド時に取得。
- `app.js` / `shell.js` / `privacy-consent.js`: 階層 depth 2 に対応。レシピリンクを `/recipes/<slug>/` に変更。
- ロゴ・主要メニューの `href="#"` を実リンクに変更(shell.js)。
- `recipes/recipe.html`: 旧 `?slug=` URL を新 URL へ転送(旧スラッグも対応)・noindex。
- `generate-sitemap.js` / `sitemap.xml`: 新 URL 形式。
- JSON-LD の画像: 存在しない `recipe.jpg` を指さないように修正。
- ホームの title/description を検索向けに変更、View All は「All Recipes」の説明つきに。

## データ・不整合
- Calabaza のスラッグを画像フォルダ名に合わせて `mexican-calabaza-en-tacha-pumpkin-pie` に変更(旧スラッグは recipe.html が転送)。
- 大文字小文字がずれていた画像パス15件を実ファイル名に修正。
- 存在しない `recipeImage`(pie crust / cowboy BBQ)を削除。`midnight..!` → `midnight…!`。
- About / Contact だけにあった別デザインのフッターを削除し、全ページで共通フッターに(ALL RECIPES を追加)。

## 広告・プライバシー
- `pages/privacy.html`: Google AdSense の広告 Cookie の説明(Ads Settings / aboutads.info へのリンク)を追加、更新日を変更。

## 画像・ビルド
- `generate-card-webp.py`: 使われていない card-320/640.webp をやめ、`app.js` が実際に読む `hero-list.webp`(640x960)を生成。
- ワークフロー: プリレンダリング工程を追加、`recipes/` をコミット対象に。
- `tools/optimize-images.py`(新規): 手順写真を 1600px・約80%品質に縮小。実測 235MB → 46MB(162ファイル)。
- `cleanup.sh`: 未使用ファイルの削除(任意の下書きフォルダは行頭 # のまま)。
