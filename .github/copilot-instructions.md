# Copilot Instructions for AI Coding Agents

## プロジェクト概要
このリポジトリは、React（TypeScript）によるポートフォリオWebアプリケーションです。主要なコードは `2025/index.tsx` にあり、`App` コンポーネントがエントリーポイントです。

## 主要構成
- すべてのソースコードは `2025/` ディレクトリに格納されています。
- `index.tsx` がメインファイルで、Reactの関数コンポーネント `App` をエクスポートしています。
- TypeScript設定は `tsconfig.json` で管理されています。
- パッケージ管理は `package.json` で行い、依存関係には `react`, `react-dom`, `ts-node`, `nodemon` などが含まれます。

## 開発・実行方法
- 開発サーバー起動: `npm start` または `yarn start`（`nodemon ts-node index.tsx` を実行）
- テスト: 現状テストは未実装（`npm test` はエラーを返す）
- ビルドコマンドは未定義

## コーディング規約・パターン
- JSXは `react-jsx` 形式（`tsconfig.json` の `jsx` オプション）
- TypeScriptのターゲットは `es2022`、モジュールは `ES2022`
- 主要なReactコンポーネントは関数型で記述
- ディレクトリ構成やファイル命名はシンプル（現状は1ファイル構成）

## 外部連携・依存
- 外部ライブラリは `react`, `react-dom`, `nodemon`, `ts-node`, `typescript` のみ
- バックエンドやAPI連携は現状なし

## 重要ファイル
- `2025/index.tsx`: メインReactコンポーネント
- `2025/package.json`: スクリプト・依存関係管理
- `2025/tsconfig.json`: TypeScript設定

## 注意事項
- テストやビルド、CI/CDの設定は未実装
- `.github/copilot-instructions.md` が本ガイド
- 今後ファイルやディレクトリが増える場合は、主要なエントリーポイントやルールを随時追記すること

---
この内容で不明点や追加したい情報があればご指摘ください。