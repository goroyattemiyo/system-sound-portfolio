# Implementation Plan

## 1. Development Policy

設計、素材整理、実装を同時に進めすぎない。

次の順序を基本とする。

**Plan → Test / Check → Execute → Review**

サイトと名刺は同じデザインシステムから作る。名刺だけ、サイトだけを個別に完成させて世界観がずれないようにする。

## 2. Recommended Repository Structure

```text
system-sound-portfolio/
├─ README.md
├─ docs/
│  ├─ 01_PROJECT_CONTEXT.md
│  ├─ 02_BRAND_GUIDELINES.md
│  ├─ 03_PORTFOLIO_LP_SPEC.md
│  ├─ 04_BUSINESS_CARD_SPEC.md
│  ├─ 05_CONTENT_INVENTORY.md
│  └─ 06_IMPLEMENTATION_PLAN.md
├─ public/
│  ├─ images/
│  ├─ works/
│  ├─ og/
│  └─ favicon/
├─ src/
│  ├─ components/
│  ├─ content/
│  │  └─ works/
│  ├─ layouts/
│  ├─ pages/
│  ├─ styles/
│  └─ scripts/
├─ design/
│  ├─ logo/
│  ├─ business-card/
│  ├─ wireframes/
│  └─ exports/
└─ tests/
```

## 3. Technology Recommendation

### Primary Candidate：Astro

理由：

- LPやポートフォリオに向く
- 初期表示を軽くしやすい
- Markdown／MDXで実績を追加できる
- 必要な箇所だけJavaScriptを使える
- GitHub Pages、Cloudflare Pages、Vercelへ公開しやすい

### Supporting Choices

- TypeScript
- CSS Custom Properties
- Astro Content Collections
- 必要に応じて小さなCanvas／SVGアニメーション
- VitestまたはPlaywright
- ESLint／Prettier

UIライブラリを最初から大量に導入せず、ブランド固有の見た目をCSSと小さなコンポーネントで構築する。

## 4. Design Tokens

初期実装ではCSS変数として管理する。

```css
:root {
  --color-stage-black: #0b0b0c;
  --color-charcoal: #1a1918;
  --color-maple: #c77732;
  --color-deep-wood: #6b351c;
  --color-ivory: #f2ebdd;
  --color-accent-red: #d51624;
  --color-signal-muted: #7fa6a3;

  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-12: 3rem;
  --space-16: 4rem;

  --radius-small: 0.375rem;
  --radius-medium: 0.75rem;
  --radius-large: 1.5rem;
}
```

色は画面上で確認後、印刷用CMYKとは別に管理する。

## 5. Phase 1 — Content Audit

### Tasks

- GitHubの全リポジトリを一覧化
- note目次から関連する記事を抽出
- Threadsや公開デモを整理
- 非公開の社内事例を匿名化可能か判断
- `docs/05_CONTENT_INVENTORY.md` を更新

### Check

- 代表事例候補が4〜6件に絞られている
- 各事例にBefore／Afterがある
- 機密性の高いものを識別できている

## 6. Phase 2 — Logo Exploration

### Tasks

F字孔とFrequencyを中心に、最低3方向のラフを作る。

1. Minimal F-hole
2. Dual Signal
3. Frequency Trace

### Required Tests

- 16px favicon
- 24px SNSアイコン
- 名刺上の10〜15mm
- 白黒印刷
- 木色単色
- 黒背景／白背景

### Review Questions

- コントラバスを知らない人にも形として魅力があるか
- 音楽教室のロゴに見えすぎないか
- AI企業のテンプレートロゴに見えないか
- 小さくしてもFの特徴が残るか

## 7. Phase 3 — Copy and Information Architecture

### Tasks

- ヒーローコピー確定
- Solutionsの6項目を調整
- Featured Worksの紹介文作成
- プロフィール文章確定
- CTA文言確定
- 問い合わせ方法を決定

### Test

技術に詳しくない第三者が、スマートフォンで1分見て次を答えられるか確認する。

- 何をしている人か
- どんな相談ができるか
- どんなものを作ってきたか
- どう連絡するか

## 8. Phase 4 — Wireframe

スマートフォン版から作る。

### Required Screens

- Hero
- Problem
- Solutions
- Featured Works
- Process
- About
- Music
- Contact

### Check

- 各セクションの役割が重複していない
- スクロールが長すぎても、現在位置を失わない
- 名刺QRから来た人が迷わない
- noteやGitHubを開かなくても要点が分かる

## 9. Phase 5 — Visual Design

### Tasks

- 黒い空間とスポットライトの表現
- 木部の写真またはテクスチャ選定
- 赤の使用箇所を限定
- F字孔ラインの動き
- 実績カードの画面デザイン
- PC／スマートフォンのデザイン

### Risks

- 黒背景が重く、威圧的になる
- 木目を増やしすぎて飲食店や家具店に見える
- 音楽要素が強すぎて業務支援が伝わらない
- 赤が増え、カルメンやバラが主題に見える
- 雰囲気を優先して本文が読みにくくなる

### Countermeasures

- Warm Ivoryの余白セクションを途中に入れる
- 木は曲面や写真として限定使用
- HeroとSolutionsで業務改善を明確にする
- 赤は2%以下
- WCAGのコントラストを確認

## 10. Phase 6 — Astro Implementation

### Initial Components

- `Header.astro`
- `Hero.astro`
- `FHoleMark.astro`
- `SolutionCard.astro`
- `WorkCard.astro`
- `ProcessSteps.astro`
- `Profile.astro`
- `MusicSection.astro`
- `ContactCTA.astro`
- `Footer.astro`

### Work Content Schema

```ts
{
  title: string;
  summary: string;
  category: string;
  problem: string;
  previousProcess: string;
  solution: string;
  outcome?: string;
  technologies: string[];
  image: string;
  githubUrl?: string;
  noteUrl?: string;
  demoUrl?: string;
  featured: boolean;
  order: number;
}
```

### Quality Requirements

- TypeScript strict mode
- Lighthouseで基本品質を確認
- 画像遅延読み込み
- AVIF／WebP
- 404ページ
- OGP
- sitemap
- robots.txt
- reduced motion対応
- フォームのスパム対策

## 11. Phase 7 — Business Card Design

サイトのロゴ、色、書体、余白が確定してから制作する。

### Steps

1. 表面2案、裏面2案を作る
2. 家庭用プリンターまたはコンビニで原寸確認
3. QRコード読取テスト
4. 印刷会社のテンプレートへ配置
5. CMYK変換後の木色と赤を確認
6. 少部数でテスト印刷
7. 問題なければ本印刷

## 12. Phase 8 — Deployment

### Candidate Hosting

- Cloudflare Pages
- Vercel
- GitHub Pages

フォームやサーバー機能が不要ならCloudflare PagesまたはGitHub Pagesで十分。

### Domain

ブランド名だけでは人物と結びつきにくいため、個人名または活動名を含むドメインを検討する。

例の方向性：

- goro + works
- goro + system
- system-sound + personal identifier

ドメイン取得前に、SNSアカウントとの整合性と覚えやすさを確認する。

## 13. Review Checklist

### Content

- [ ] 誇張した実績がない
- [ ] 技術用語だけで説明していない
- [ ] 対象顧客が明確
- [ ] 問い合わせへの心理的負担が低い

### Security

- [ ] APIキーがない
- [ ] `.env` が除外されている
- [ ] 勤務先・顧客の情報がない
- [ ] ダミーデータを使用
- [ ] リポジトリの公開範囲を確認

### Design

- [ ] 赤が多すぎない
- [ ] 木目が背景ノイズになっていない
- [ ] F字孔が小サイズで潰れない
- [ ] 名刺とサイトが同じブランドに見える
- [ ] スマートフォンで読みやすい

### Technical

- [ ] ビルド成功
- [ ] リンク切れなし
- [ ] Lighthouse確認
- [ ] 主要ブラウザ確認
- [ ] reduced motion確認
- [ ] QRコードのリンク確認

## 14. First Milestone

第一マイルストーンは、コードを書くことではなく、次の状態を作ること。

- 代表事例を5件に決定
- 各事例の短い説明が完成
- ロゴの3案がある
- スマートフォン用ワイヤーフレームがある
- 必要な写真・画面素材が一覧化されている

この状態をレビューしてから、Astroプロジェクトの実装を開始する。
