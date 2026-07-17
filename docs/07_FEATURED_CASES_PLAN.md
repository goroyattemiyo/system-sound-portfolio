# Featured Cases Plan

## 1. Purpose

LP初期公開で扱う6つの代表事例について、掲載順、短いコピー、必要素材、公開条件を定義する。

事例の数を増やすより、各事例を「何を作ったか」ではなく「どの面倒をどう変えたか」で説明する。

## 2. Shared Case Structure

各事例は次の順番で見せる。

1. **One-line result**：何を楽にしたか
2. **Before**：以前の作業
3. **Problem**：なぜ困っていたか
4. **Solution**：何を作ったか
5. **How it works**：入力、処理、出力
6. **Design decisions**：なぜその方法を選んだか
7. **Current status**：完成、運用中、MVP、検証中など
8. **Limitations**：できないこと、注意点
9. **Links**：Demo、GitHub、note

技術スタックは最後に置き、技術名から説明を始めない。

## 3. Case 01 — Rack Diagram Web App

### Display title

**ラック図面作成を、Excelの図形操作からドラッグ＆ドロップへ。**

### Short copy

装置の図形配置、名称、ポート情報の手入力を、ブラウザ上で扱える専用ツールへ置き換えた業務改善事例です。

### Category

Business Improvement / Infrastructure / Web App

### Hero visual

- 左：Excelを模した図形と手入力の画面
- 右：ブラウザ上で装置をラックへ配置している画面
- 中央：`MANUAL → INTERACTIVE` の短い遷移表示

### Required assets

- [ ] 架空のラック、装置、ポート情報
- [ ] 匿名再現アプリ
- [ ] PC画面スクリーンショット
- [ ] ドラッグ操作動画
- [ ] Before／After図
- [ ] データ構造の簡略図
- [ ] 非公開情報チェック

### Publication gate

匿名再現版とダミーデータが完成するまで、実画面を公開しない。

---

## 4. Case 02 — Internal Knowledge Search

### Display title

**増え続けるExcelの“虎の巻”を、まとめて探せるように。**

### Short copy

複数の担当者が蓄積した情報を横断検索し、必要な記録へすぐ到達できるようにした社内情報活用の事例です。

### Category

Business Improvement / Search / Knowledge Management

### Hero visual

- 複数のExcelファイルを表すカード
- 一つの検索窓
- 検索語と一致箇所が強調された結果

### Required assets

- [ ] 架空の社内情報50〜100件
- [ ] 検索画面
- [ ] 絞り込み画面
- [ ] 一致箇所の強調表示
- [ ] Excelから検索までのフロー図
- [ ] Before／After図
- [ ] 非公開情報チェック

### Publication gate

実データは使用しない。会社名、顧客名、障害情報、設備情報をすべて架空にする。

---

## 5. Case 03 — Threads Operations System

### Display title

**AIとの会話から、Threads投稿・履歴・分析までを一つの運用へ。**

### Short copy

投稿予約だけでなく、画像、ツリー投稿、履歴検索、エラー復旧、分析、トークン管理までを統合したSNS運用システムです。

### Category

AI Operations / SNS / Automation

### Hero visual

AI Chat → GitHub → Actions → Threads → Insights

この流れを一本の細い信号線として描き、SYSTEM / SOUNDのF字孔モチーフと接続する。

### Main evidence

- `threads-chatgpt-autopilot-template`
- `threads-auto-pilot-goro`
- `threads-note-autopilot`
- `insight-master-demo`
- Threadsトークン管理に関するnote記事

### Required assets

- [ ] 全体構成図
- [ ] ダミー投稿台帳
- [ ] AIチャットで投稿を登録する動画
- [ ] GitHub Actions実行画面
- [ ] Threads側のテスト投稿画面
- [ ] Insight Master画面
- [ ] エラー復旧フロー
- [ ] Public／Private境界図

### Current status label

**Operational prototype / Pre-release validation**

「完成済み商品」や「導入実績多数」とは表現しない。

### Publication gate

- Secrets、トークン、顧客設定を含まない
- `threads-note-autopilot` の公開方針とREADMEを整理する
- 顧客導入前の未検証項目を明記する

---

## 6. Case 04 — Rakuten Select Assist

### Display title

**迷い続ける商品選びを、比較できる選定フローへ。**

### Short copy

価格やレビューを行き来する商品選定を、検索・比較・スコアリングで支援する個人事業主向けWebアプリです。

### Category

Decision Support / Web App / API

### Hero visual

- 商品カードの一覧
- 比較項目
- スコアが高い候補の強調
- 「探す」から「判断する」への変化

### Required assets

- [ ] `/genre-search` の画面
- [ ] `/genre-results` の画面
- [ ] 比較スコアの説明図
- [ ] 検索から選定までの動画
- [ ] APIなしで見せられる固定デモデータ
- [ ] note記事へのリンク

### Outcome wording

使用可能：

> 自身の利用では、商品選定が約2時間から15分になりました。

使用しない：

> 商品選定時間を全員90％削減します。

個人の実測と一般的な効果を分ける。

### Current status label

**MVP in development**

---

## 7. Case 05 — IrodoriTTS Studio

### Display title

**AI音声生成を、“一回試す”から“制作を続けられる流れ”へ。**

### Short copy

声の設計、長文台本の分割生成、保存、試聴、SNS用動画変換をつないだ、AI音声制作の補助環境です。

### Category

AI Audio / Creative Workflow / UI

### Hero visual

- コントラバスのF字孔に似た波形
- 台本文字列が音声波形へ変わる表現
- 木の質感と小さな赤い再生インジケーター

### Required assets

- [ ] VoiceDesign画面
- [ ] Studio画面
- [ ] Video Converter画面
- [ ] 台本から音声までのフロー
- [ ] 権利上問題のない音声サンプル
- [ ] Google Colabの起動導線
- [ ] 上流IrodoriTTSとの関係図
- [ ] note記事へのリンク

### Attribution wording

> IrodoriTTS本体を開発したものではありません。公開されているIrodoriTTSを、音声制作で使いやすいGUIとワークフローへ整理した補助プロジェクトです。

### Current status label

**Work in progress**

### Publication gate

- 上流プロジェクトの表示とライセンス確認
- リポジトリ側のLicenseを決定
- 音声サンプルの利用条件を確認

---

## 8. Case 06 — LINE Stamp Maker

### Display title

**40枚の画像加工を、ブラウザだけで一つのZIPへ。**

### Short copy

画像分割、背景除去、枚数選択、ファイル名調整、LINE申請用ZIP生成を、外部送信なしで完結するツールです。

### Category

Small Tool / Image Processing / Privacy

### Hero visual

1枚の画像 → グリッド分割 → 背景透過 → 40枚選択 → ZIP

### Required assets

- [ ] 自作キャラクターまたは利用許諾済み素材
- [ ] 分割画面
- [ ] 背景除去画面
- [ ] 選択画面
- [ ] ZIP生成画面
- [ ] 15〜30秒の操作動画
- [ ] GitHub Pagesデモへのリンク
- [ ] note記事へのリンク

### Strong message

**画像はブラウザ内で処理し、外部サーバーへ送信しません。**

この点は、小規模ツールでも安全性を考えている証拠として見せる。

### Current status label

**Public demo available**

---

## 9. Supporting Works Display

主力6事例の後に、3〜4件を小さなカードで表示する。

### Candidates

- Screenshot Smart Sorter
- Insight Master Demo
- Synapse
- Coffee Brewing App
- GAS LP Deployment Guide
- AA Copy Tool

### Card content

- タイトル
- 1行説明
- 種別：App / Experiment / Guide
- GitHubまたはnoteへのリンク

Supporting Worksには長いケーススタディを作らない。

## 10. Phase A / Phase B

### Phase A — Initial release

匿名業務デモが未完成の場合：

1. Threads Operations System
2. LINE Stamp Maker
3. Rakuten Select Assist
4. IrodoriTTS Studio
5. Supporting Works
6. Rack Diagram、Internal Knowledge Searchは短い匿名概要のみ

### Phase B — Full portfolio

匿名業務デモ完成後：

1. Rack Diagram Web App
2. Internal Knowledge Search
3. Threads Operations System
4. Rakuten Select Assist
5. IrodoriTTS Studio
6. LINE Stamp Maker

## 11. Asset Production Priority

1. LINE Stamp Makerの画面と動画
2. Insight Master Demoを含むThreads全体構成図
3. Rakuten Select Assistの固定デモデータ
4. IrodoriTTSの画面と音声サンプル
5. Rack Diagram匿名再現版
6. Internal Knowledge Search匿名再現版

公開済み・撮影しやすい作品から素材を作り、サイト設計と並行して匿名業務デモを整備する。

## 12. Review Checklist

- [ ] 課題が技術用語なしで理解できる
- [ ] 完成／MVP／検証中の表示が正しい
- [ ] 数値は実測または本人のケースだと分かる
- [ ] 実在する会社・顧客・設備が特定できない
- [ ] APIキーやトークンが画面に映っていない
- [ ] 外部プロジェクトへの帰属を明記している
- [ ] デモ用データであることを表示している
- [ ] 画像・音声・フォントの利用権を確認している
- [ ] GitHub、note、デモのリンクが有効
