# Profile LP Adoption Decision

## Decision

`wireframes/system-sound-profile-preview.html` を、SYSTEM / SOUND ポートフォリオサイトの正式なLP設計ベースとして採用する。

このHTMLは公開本番ファイルではなく、Astro実装へ移行するための確認済みプロトタイプとして扱う。

## Adopted Direction

### Brand and Hero

- 正本ロゴは、ユーザー確認済みのF字孔トレース形状を使用する。
- Formal Markは黒または生成りの単色とする。
- ワインレッドは静止色として残さず、Hero内の反射・周期表現に限定する。
- 大ロゴでは中央の `< >` ノッチ周辺に、細い楕円軌道がZ軸方向へ回転する表現を使用する。
- ネオン、強いグロー、独立した派手な光点は避ける。
- `prefers-reduced-motion` ではアニメーションを停止する。

### Logo Story

見出しは以下を正本候補とする。

> 音楽のように、改善を進める。

ストーリーは次の関係を一貫して説明する。

1. F字孔は楽器内部の振動を響きとして外へ伝える。
2. 音楽は周期的な振動と変化の重なりで進む。
3. 仕事にも毎日・毎週・毎月の反復がある。
4. その反復へAIと小さな仕組みで周期的な変化を与える。
5. 曲が展開するように、業務改善を少しずつ前へ進める。

### Profile

公開プロフィールには以下を掲載する。

- ながや ごろう / 永谷 悟郎
- AIソリューションエンジニア
- Contrabass & Electric Bass Player
- 国立音楽大学卒業
- 中学校・高等学校教諭免許状（音楽）
- 〒426-0063 静岡県藤枝市青南町4-5-7
- TEL: 090-4263-5824
- LINE連絡リンクおよびQRコード

音楽活動は主サービスとして強く売り出さず、学校・吹奏楽・地域音楽活動の関係者が経歴と連絡先を確認できる補助プロフィールとして扱う。

## Astro Migration Scope

正式実装では、単一HTMLをそのままルートへ置かず、Astroで以下へ分割する。

- `Header.astro`
- `Hero.astro`
- `FHoleMark.astro`
- `LogoStory.astro`
- `Profile.astro`
- `MusicSection.astro`
- `ContactCTA.astro`
- `Footer.astro`

静的アセットは以下に整理する。

- `public/images/profile/`
- `public/images/contact/line-qr.jpg`
- `public/brand/system-sound-formal-mark.svg`
- `public/favicon/`
- `public/og/`

画像・SVGはHTMLから相対パスで参照し、Private開発中からPublic化・GitHub Pages公開後までパス変更を不要にする。

## Required Sections for First Public Version

初回公開版は情報を詰め込みすぎず、以下を必須とする。

1. Hero
2. Logo Story / Frequency
3. Solutions
4. Featured Works（最低3件）
5. About
6. Music
7. Contact / LINE

## Publication Gate

Public化およびPages公開前に以下を完了する。

- 正本SVGの差し替えと表示確認
- LINE QRコード画像のリポジトリ格納
- 住所・電話番号・LINEリンクの最終確認
- Featured Worksの最低3件掲載
- OGP、favicon、404、sitemap、robots.txt
- リンク切れ確認
- スマートフォン確認
- Lighthouse基本確認
- `prefers-reduced-motion` 確認
- APIキー、認証情報、勤務先・顧客情報がないことを確認
- リポジトリをPublicへ変更した後、GitHub Pagesを有効化

## Current Status

- LPのブランド方向性：採用
- ロゴストーリー：採用
- プロフィール・連絡方法：採用
- 単一HTML：Astro実装用プロトタイプ
- Astro正式実装：未着手
- Public化・Pages公開：未実施
