# Astro Implementation Tasks

## Goal

採用済みの `wireframes/system-sound-profile-preview.html` を、公開可能なAstroサイトへ移行する。

## Phase A — Foundation

- Astro + TypeScript strict modeを初期化
- GitHub Pages向けの`site` / `base`設定を追加
- CSS Custom Propertiesへデザイントークンを移行
- 共通Layout、Header、Footerを実装
- `public/brand/`、`public/images/`、`public/og/`、`public/favicon/`を作成

## Phase B — Brand Components

- 正本SVGを`public/brand/system-sound-formal-mark.svg`へ配置
- `FHoleMark.astro`を実装
- Hero限定の反射アニメーションを実装
- 中央ノッチ周辺の楕円軌道アニメーションを実装
- `prefers-reduced-motion`時に全演出を停止
- 16px / 24px / 32px / 64pxでの視認性を確認

## Phase C — Page Content

- Hero
- Logo Story / Frequency
- Solutions
- Featured Works（初回3件以上）
- About
- Music
- Contact / LINE

## Phase D — Contact Assets

- LINE QRコード画像を`public/images/contact/line-qr.jpg`へ追加
- QRコードからLINEリンクを開けるか実機確認
- 電話番号を`tel:`リンク化
- 住所表記を確認

## Phase E — Production Quality

- OGP画像
- favicon
- 404ページ
- sitemap
- robots.txt
- 画像のWebP / AVIF化
- 遅延読み込み
- Lighthouse確認
- スマートフォン・PC確認
- Chrome / Safari / Firefox系確認

## Phase F — Release

- 機密情報と認証情報の確認
- Draft PRの差分整理
- `main`へマージ
- リポジトリをPublicへ変更
- GitHub Pagesを有効化
- 公開URLで最終確認
- 名刺用QRコードのURLを公開URLへ確定

## Definition of Done

- 名刺QRから30〜60秒で「何をしている人か」「何を相談できるか」「どう連絡するか」が分かる
- ロゴのF字孔・Frequency・業務改善の物語が伝わる
- LINE QRコードと電話リンクが実機で動作する
- スマホで横スクロールや読みにくい箇所がない
- 動きを減らす設定でアニメーションが停止する
- GitHub Pages上で画像・SVG・リンク切れがない
