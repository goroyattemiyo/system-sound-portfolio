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
- Formal Markは黒または生成り一色とし、ワインレッドはHeroで一瞬走る反射としてだけ使用
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
13. [Brand Mark Reduction](docs/13_BRAND_MARK_REDUCTION.md)
14. [Candidate 06 Formal Mark](docs/14_CANDIDATE_06_FORMAL_MARK.md)
15. [Candidate 06 Terminal Color Decision](docs/15_TERMINAL_COLOR_DECISION.md)
16. [Animated Hero Motion Comparison](docs/16_HERO_MOTION_COMPARISON.md)

## Design Drafts

- [Initial F-hole logo concept sheet](design/logo/logo-concepts.svg)
- [Initial responsive LP wireframe](wireframes/lp-wireframe.html)
- [Selected formal logo symbol](design/logo/system-sound-symbol.svg)
- [Candidate 06 Formal Mark](design/logo/system-sound-formal-mark.svg)
- [Candidate 02 comparison reference](design/logo/system-sound-candidate-02-reference.svg)
- [Candidate 10 Small Icon](design/logo/system-sound-small-icon.svg)
- [Animated Hero Mark / Subtle Sweep](design/logo/system-sound-animated-hero-mark.svg)
- [Soft Pulse animated SVG](design/logo/system-sound-animated-soft-pulse.svg)
- [Varnish Glint animated SVG](design/logo/system-sound-animated-varnish-glint.svg)
- [Dark-background horizontal lockup](design/logo/system-sound-horizontal-reversed.svg)
- [Historical A: reference trace](design/logo/system-sound-concept-a-reference-trace.svg)
- [Historical B: trace simplification](design/logo/system-sound-concept-b-instrument-signal.svg)
- [Historical C: small-size study](design/logo/system-sound-concept-c-small-cut.svg)
- [Phase 01 logo / hero browser preview](wireframes/brand-phase-01.html)
- [Phase 02 candidate 06 application preview](wireframes/brand-phase-02.html)
- [Phase 03 terminal-color comparison preview](wireframes/brand-phase-03.html)
- [Phase 04 live Hero motion comparison](wireframes/brand-phase-04.html)
- [Terminal A / Deep Wine](design/logo/system-sound-terminal-a.svg)
- [Terminal B / Burgundy](design/logo/system-sound-terminal-b.svg)
- [Terminal C / Mature Red](design/logo/system-sound-terminal-c.svg)

正式ロゴのベースは **候補06** とし、Formal Markは黒または生成り一色へ戻しました。ワインレッド `#7A1F2B` は静止終端色ではなく、Heroで10秒ごとに約1.8秒だけ下端から上端へ走る反射として使用します。第一候補は **Subtle Sweep**。名刺、ヘッダー、favicon、小型アイコンは完全静止し、`prefers-reduced-motion`では反射を非表示にします。

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

`design/logo/logo-concepts.svg` と `wireframes/lp-wireframe.html` は初期ラフです。現行の形状基準は `docs/14_CANDIDATE_06_FORMAL_MARK.md`、Heroの反射表現は `docs/16_HERO_MOTION_COMPARISON.md` を参照してください。終端色の比較は `docs/15_TERMINAL_COLOR_DECISION.md`、写真トレース段階は `docs/12_LOGO_TRACE_REVISION.md` に判断履歴として残し、参照写真そのものはリポジトリへ含めません。
