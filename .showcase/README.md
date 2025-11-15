# ユーザーレビュー掲載アプリ

Google Sheets のレビュー情報と AI を活用して、ユーザーのレビューを一覧表示・要約するアプリケーションです。
[Blueberry Mojito (b13o)](https://b13o.com/) のハンズオン教材をベースに、独自の機能追加・改善を行っています。

> [!NOTE]
> このリポジトリは、個人的な学習およびデモンストレーションの目的のみに使用されます。
> This repository is for personal learning and demonstration purposes only.

## 機能

* ユーザーレビュー一覧の表示
* Google Sheets API を使用したレビュー取得
* SWR によるクライアントサイドフェッチ
* Gemini API を利用したレビュー要約
* ローディング中・エラー時のフォールバック UI の追加

## 技術スタック

* React
* TypeScript
* Vite
* Bun
* Tailwind CSS
* shadcn/ui
* SWR
* Google Sheets API
* Gemini API
* Cloudflare Pages（デプロイ）

## セットアップ

このプロジェクトは [Bun](https://bun.sh/) または [pnpm](https://pnpm.io/) で動作します。

```bash
# リポジトリをクローン
git clone https://github.com/oumelab/demo-ai-review-analysis-app.git
cd demo-ai-review-analysis-app

# 依存関係をインストール（Bun）
bun install
# または pnpm
# pnpm install

# 開発サーバーを起動
bun dev
# または pnpm dev
```

### API キーの設定

`.env` に Google Sheets / Gemini API キーなどを設定してください。

```
VITE_GOOGLE_SHEETS_ID=xxxx
VITE_GOOGLE_API_KEY=xxxx
VITE_GEMINI_API_KEY=xxxx
```

## 使い方

1. **レビュー一覧の読み込み**
   アプリ起動時に Google Sheets からレビューを取得します。
2. **レビューの要約**
   任意のボタン操作により、取得したレビューを AI（Gemini）で要約します。
3. **ローディング/エラー時の補助 UI**
   SWR でフェッチ状態に応じた UI を自動表示します。

## デモ

[デモサイトはこちら](https://demo-ai-review-analysis-app.pages.dev/)

<picture width="100%" height="auto">
  <source srcset="./public/screenshot.webp" type="image/webp" />
  <img src="./public/screenshot.png" alt="screenshot" />
</picture>

## ビルド

```bash
bun run build
# または pnpm build
```

## 追加実装履歴

* [x] Google Sheets API を利用したレビュー取得
* [x] SWR 導入によるフェッチ処理改善
* [x] ローディング・エラー用のフォールバック UI を追加
* [x] Gemini API によるレビュー要約機能
