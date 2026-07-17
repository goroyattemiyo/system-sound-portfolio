# Content Inventory

## 1. Purpose

GitHub、note、Threads、社内での非公開制作物を棚卸しし、ポートフォリオへ掲載する代表事例を選ぶ。

すべてを載せることが目的ではない。閲覧者が「自分の業務でも相談できそう」と思える順番へ整理する。

## 2. Classification

各制作物を次のいずれかへ分類する。

- **Featured**：トップで紹介する主力事例
- **Supporting**：主力を補強する事例
- **Experiment**：技術検証・学習記録
- **Private Case**：公開できないが、匿名化・再現により紹介可能
- **Archive**：現在は掲載しない

## 3. Evaluation Criteria

各項目を1〜5で評価する。

| Criterion | Question |
|---|---|
| Business relevance | 中小企業・個人事業主の業務課題と結びつくか |
| Clarity | 技術に詳しくない人にも説明しやすいか |
| Demonstrability | スクリーンショット、動画、デモで見せられるか |
| Originality | goroらしい視点や設計があるか |
| Completeness | 実際に動作し、説明できる状態か |
| Safety | 機密情報や権利上の問題なく公開できるか |
| Story | Before／Afterの物語が作れるか |

## 4. Inventory Template

| Field | Content |
|---|---|
| Project name |  |
| Category | Business / SNS / Audio / Image / Creative / Infrastructure |
| Classification | Featured / Supporting / Experiment / Private Case / Archive |
| Problem | 何が面倒・不便だったか |
| Previous process | 以前はどう作業していたか |
| Solution | 何を作ったか |
| User | 誰が使うか |
| Outcome | 何が変わったか。実測できない効果は断定しない |
| Technologies |  |
| Repository |  |
| note article |  |
| Demo |  |
| Screenshots |  |
| Public status | Public / Private / Partial |
| Confidentiality risk |  |
| Required cleanup | README、ダミーデータ、画面改善など |
| Portfolio copy | 閲覧者向けの短い説明 |
| Score |  |

## 5. Initial Candidates

### Rack Diagram Web App

- Classification：Featured
- Category：Business / Infrastructure
- Problem：Excelで図形を配置し、装置名やポート情報を手入力
- Portfolio angle：現場の既存作業を、専用の小さなWebアプリへ置き換えた事例
- Required：ダミーデータによる画面再現、操作動画、構成説明
- Risk：勤務先情報、実在設備、IPアドレス、装置名の公開禁止

### Internal Knowledge Search

- Classification：Featured
- Category：Business / Search
- Problem：複数人がExcelへ蓄積した情報を探しにくい
- Portfolio angle：「情報を増やす」より「探せるようにする」という改善
- Required：匿名化されたサンプルデータ、検索画面
- Risk：社内ノウハウや顧客情報を公開しない

### Threads Automation System

- Classification：Featured
- Category：SNS / Automation
- Problem：投稿準備、予約、実行、画像、履歴、トークン管理が分散
- Portfolio angle：複数のAPIと運用を、一つの仕組みに統合した事例
- Related repositories：
  - `threads-note-autopilot`
  - `threads-chatgpt-autopilot-template`
  - `threads-autopilot-assets-template`
  - その他の公開可能な関連リポジトリ
- Required：全体構成図、公開／非公開部分の整理
- Risk：アクセストークン、顧客用設定、非公開運用情報

### Irodori TTS Studio

- Classification：Featured
- Category：Audio / AI
- Problem：長文音声の生成工程が複雑
- Portfolio angle：AIモデルを使うだけでなく、制作フローとUIを設計
- Required：画面、音声サンプル、処理フロー
- Risk：使用モデルや音声データのライセンス確認

### Screenshot Sorter

- Classification：Supporting
- Category：Business / Image
- Problem：スクリーンショットが増え、整理に手間がかかる
- Portfolio angle：小さな不便を小さなツールで解決
- Repository：`screenshot-sorter`

### Background Removal / Splitting

- Classification：Supporting
- Category：Image
- Portfolio angle：定型的な画像加工の省力化
- Repository：`Background-removal-splitting`

### Rakuten Select Assist

- Classification：Supporting
- Category：Business / Recommendation
- Portfolio angle：比較・選定作業を支援する小規模アプリ
- Repository：`rakuten-select-assist`

### Insight Master

- Classification：Featured candidate
- Category：SNS / Analytics
- Portfolio angle：投稿するだけでなく、結果を確認し改善へつなげる
- Repositories：
  - `insight-master`
  - `insight-master-demo`
  - `insight-master-snap`

### AI Creative Projects

- Classification：Supporting
- Category：Creative
- Candidates：
  - `manga-ai-pipeline`
  - `mipurin-adventure-unity`
  - `irodori-tts-studio`
  - `sound-works`
- Portfolio angle：音楽家・制作者としての幅を見せる
- Note：業務改善事例より前へ出しすぎない

## 6. Portfolio Selection Rule

初期公開は次の構成を目安にする。

- 業務改善：2件
- SNS・自動化：1〜2件
- 音声・クリエイティブ：1件
- 小さな便利ツール：1件

合計4〜6件。

同じ種類の自動投稿ツールを複数並べるより、関連リポジトリを一つのケーススタディへまとめる。

## 7. Required Assets per Featured Work

- [ ] タイトル
- [ ] 50文字程度の概要
- [ ] Before
- [ ] Problem
- [ ] Solution
- [ ] Process diagram
- [ ] Main screenshot
- [ ] Mobile screenshot if applicable
- [ ] Technologies
- [ ] Limitations
- [ ] Future improvements
- [ ] GitHub URL
- [ ] note URL
- [ ] Demo URL
- [ ] Confidentiality check
- [ ] Rights／license check

## 8. Do Not Publish

- APIキー、トークン、秘密鍵
- 実在する顧客・勤務先の内部情報
- IPアドレス、ホスト名、ネットワーク構成
- 個人情報を含むExcelやPDF
- 権利を持たない画像、音源、文章
- セキュリティ上の手順を詳細に公開すると危険な構成
- 実測していない改善率
