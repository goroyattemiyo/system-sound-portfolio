# SYSTEM / SOUND Portfolio

AIソリューションエンジニアとコントラバス奏者という二つの活動を、ひとつのブランドとしてまとめるポートフォリオプロジェクトです。

## Purpose

地元の中小企業・個人事業主に対して、AIやWeb技術を「難しい技術」ではなく、日々の面倒な作業を改善する実用的な手段として伝えます。

このリポジトリでは、以下を一体設計します。

- LP型ポートフォリオサイト
- 両面名刺
- ロゴ／シンボル
- ブランドガイドライン
- 掲載する実績の整理
- 実装・公開までの計画

## Brand Concept

### SYSTEM / SOUND

システムを組み立てる技術者と、音を組み立てる音楽家。

複雑な要素を整理し、人が扱いやすく、心地よく動く状態をつくることを共通の価値とします。

**仕事の中にある「毎回面倒」を、AIと小さな仕組みで改善する。**

## Visual Direction

- 黒を基調とした、静かで奥行きのある空間
- 艶のあるコントラバスの明るい橙褐色の木肌
- 小規模な防音室で、約20人が近い距離で演奏を聴くような親密さ
- 狭い舞台に差し込む柔らかなスポットライト
- ごく小さな鮮やかな赤を、視線を締めるアクセントとして使用
- F字孔の `F` と Frequency の `F` を重ねたシンボル
- ネオンやサイバーパンクには寄せない

## Documents

1. [Project Context](docs/01_PROJECT_CONTEXT.md)
2. [Brand Guidelines](docs/02_BRAND_GUIDELINES.md)
3. [Portfolio LP Specification](docs/03_PORTFOLIO_LP_SPEC.md)
4. [Business Card Specification](docs/04_BUSINESS_CARD_SPEC.md)
5. [Content Inventory](docs/05_CONTENT_INVENTORY.md)
6. [Implementation Plan](docs/06_IMPLEMENTATION_PLAN.md)
7. [Featured Cases Plan](docs/07_FEATURED_CASES_PLAN.md)
8. [Logo Concepts](docs/08_LOGO_CONCEPTS.md)
9. [LP Wireframe](docs/09_LP_WIREFRAME.md)
10. [Design System](docs/10_DESIGN_SYSTEM.md)
11. [Phase 01 Logo / Hero Decision](docs/11_PHASE_01_LOGO_HERO_DECISION.md)
12. [Photo-based Logo Trace Revision](docs/12_LOGO_TRACE_REVISION.md)

## Design Drafts

- [Initial F-hole logo concept sheet](design/logo/logo-concepts.svg)
- [Initial responsive LP wireframe](wireframes/lp-wireframe.html)
- [Selected formal logo symbol](design/logo/system-sound-symbol.svg)
- [A: reference trace](design/logo/system-sound-concept-a-reference-trace.svg)
- [B: formal logo simplification](design/logo/system-sound-concept-b-instrument-signal.svg)
- [C: favicon simplification](design/logo/system-sound-concept-c-small-cut.svg)
- [Phase 01 logo / hero browser preview](wireframes/brand-phase-01.html)

ユーザー提供のコントラバス実物写真を形状資料とし、黒い開口部を面としてトレースしました。正式ロゴは **B — Instrument Signal**、faviconは **C — Small Cut** を使用します。FrequencyはF字孔を変形せず、内側の細い軌道と赤い点へ分離します。

LPはスマートフォンを正本とし、名刺のQRコードから訪れた人が30〜60秒で「何を相談できる人か」を理解できる順番を維持します。

## Selected Featured Cases

1. Rack Diagram Web App
2. Internal Knowledge Search
3. Threads Operations System
4. Rakuten Select Assist
5. IrodoriTTS Studio
6. LINE Stamp Maker

匿名業務事例の再現版が完成するまでは、公開デモのある事例を先に掲載します。詳細は [Featured Cases Plan](docs/07_FEATURED_CASES_PLAN.md) を参照してください。

## Primary Audience

- 地元の中小企業
- 個人事業主
- 店舗経営者
- AIに興味はあるが、具体的な使い道が分からない人
- Excel、PDF、転記、検索、SNS投稿などの手作業を減らしたい人

## Core Message

AIを導入すること自体を目的にしません。

現在の作業を聞き取り、AI、Excel、GAS、Webアプリ、APIなどから、無理なく使える方法を選びます。

## Status

- [x] ブランドの方向性を整理
- [x] リポジトリ作成
- [x] 初期設計ドキュメント作成
- [x] GitHub・noteの実績棚卸し
- [x] 掲載事例の選定
- [ ] 代表事例の画像・動画素材作成
- [ ] 匿名業務デモの仕様確定
- [x] ロゴのラフ制作
- [x] LPワイヤーフレーム制作
- [x] ロゴ方向性の選定・SVG清書
- [x] ファーストビューのビジュアル方向性
- [ ] LP全体のビジュアルデザイン
- [ ] Astroによる実装
- [ ] 名刺入稿データ制作

## Notes

公開前に、勤務先や顧客に関する機密情報、実データ、認証情報、APIキーが含まれていないことを必ず確認します。

開発中、MVP、販売前検証中の作品は、完成品と誤認されないよう現在の状態を明記します。

`design/logo/logo-concepts.svg` と `wireframes/lp-wireframe.html` は初期ラフです。写真トレース後の正式な形状基準は `docs/12_LOGO_TRACE_REVISION.md` を参照してください。参照写真そのものはリポジトリへ含めません。
