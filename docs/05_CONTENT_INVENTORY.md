# Content Inventory

## 1. Purpose

GitHub、note、Threads、社内での非公開制作物を棚卸しし、ポートフォリオへ掲載する代表事例を選ぶ。

すべてを載せることが目的ではない。閲覧者が「自分の業務でも相談できそう」と思える順番へ整理する。

- 棚卸し日：2026-07-17 JST
- 調査範囲：GitHubリポジトリのメタデータと主要README、note記事一覧と関連する代表記事
- 注意：この時点では各アプリの実行試験、全コードレビュー、秘密情報スキャンまでは行っていない

## 2. Classification

- **Featured**：トップまたは主要事例として紹介する
- **Supporting**：主力事例を補強する小規模事例
- **Experiment**：技術検証・学習記録として紹介する
- **Private Case**：公開できないが、匿名化した再現デモで紹介する
- **Archive**：初期公開では掲載しない

## 3. Evaluation Criteria

各項目を1〜5で評価する。点数は作品の優劣ではなく、今回のLPでの掲載優先度を決めるための編集上の目安とする。

| Criterion | Question |
|---|---|
| Business relevance | 中小企業・個人事業主の業務課題と結びつくか |
| Clarity | 技術に詳しくない人にも説明しやすいか |
| Demonstrability | スクリーンショット、動画、デモで見せられるか |
| Originality | goroらしい視点や設計があるか |
| Completeness | 実際に動作し、説明できる状態か |
| Safety | 機密情報や権利上の問題なく公開できるか |
| Story | Before／Afterの物語が作れるか |

満点は35点。

## 4. Key Findings

### 強み

1. **課題の発見から実装まで一人でつなげている**
   - 投稿するだけでなく、予約、履歴、分析、トークン、エラー復旧まで考えている
   - AIモデルを使うだけでなく、実際の制作フローに合わせたUIや保存方法を設計している

2. **小さな困りごとを専用ツールへ変える発想がある**
   - ラック図面
   - Excel横断検索
   - スクリーンショット整理
   - LINEスタンプ加工
   - 商品選定支援

3. **技術の幅と音楽・創作の側面を自然に接続できる**
   - AI音声
   - 音楽生成AI
   - 音源分離
   - ゲーム、漫画、画像加工

4. **noteに課題背景と試行錯誤が残っている**
   - GitHubが「何を作ったか」の証拠
   - noteが「なぜ作ったか」「何を学んだか」の証拠になる

### 弱点・リスク

1. **開発中のリポジトリが多い**
   - READMEでMVP、整備中、販売前検証中と明記されているものがある
   - LPで完成品として見せると誤解を招く

2. **類似したThreads関連リポジトリが分散している**
   - 個別作品として並べず、一つの「Threads運用システム」ケースへ統合する

3. **社内向けの最重要事例に公開デモがない**
   - ラック図面と社内情報検索は、匿名の再現版を作らないと視覚的な説得力が弱い

4. **公開方針が矛盾するREADMEがある**
   - `threads-note-autopilot` はGitHub上ではPublicだが、READMEには `Private repository - Not for redistribution` と記載されている
   - 公開前にリポジトリの公開範囲、ライセンス、サンプルデータを見直す

5. **外部モデル・API・生成物の権利確認が必要**
   - IrodoriTTS、音声サンプル、AI画像、LINEスタンプ、Suno生成物などは個別に利用条件を確認する

## 5. Final Selection

初期LPは最大6件とする。

| Priority | Case | Classification | Score | Current state | Reason |
|---:|---|---|---:|---|---|
| 1 | Rack Diagram Web App | Private Case / Featured | 30 | 匿名デモ未作成 | 一般企業に最も業務改善の価値が伝わる |
| 2 | Internal Knowledge Search | Private Case / Featured | 29 | 匿名デモ未作成 | Excel・社内情報の検索問題は対象顧客との関連が強い |
| 3 | Threads Operations System | Featured | 30 | 実運用と販売前検証が混在 | AI、API、自動化、安全設計、運用をまとめて示せる |
| 4 | Rakuten Select Assist | Featured | 29 | MVP開発中 | 個人事業主向けの課題とBefore／Afterが明確 |
| 5 | IrodoriTTS Studio | Featured | 27 | 一部整備中 | SYSTEM / SOUNDを象徴し、音楽・AI・UI設計を接続できる |
| 6 | LINE Stamp Maker | Featured / Small Tool | 30 | 公開デモあり | ブラウザ完結で説明しやすく、完成した導線を見せられる |

### 掲載方針

- Rack DiagramとInternal Knowledge Searchは、匿名デモ完成後にLP上位へ配置する
- 初期公開時は、公開画面があるThreads、Rakuten、IrodoriTTS、LINE Stamp Makerを先に見せる
- Insight MasterはThreads Operations Systemの「分析・改善」パートとして統合する
- 同じ自動投稿関連リポジトリを複数の作品として数えない

## 6. Featured Case Details

### 6.1 Rack Diagram Web App

- Classification：Private Case / Featured
- Category：Business / Infrastructure
- Score：30 / 35（暫定）
- Problem：Excel上で図形を配置し、装置名やポート情報を手入力していた
- Solution：装置をドラッグしてラック内へ配置し、構成を視覚的に作成できるWebアプリ
- Portfolio angle：既存のExcel作業を観察し、現場専用の小さな業務アプリへ置き換えた
- Strong point：業務理解、UI設計、インフラ知識を一つの事例で示せる
- Required assets：
  - 架空の会社・設備を使った再現版
  - ドラッグ操作の短い動画
  - Excel作業とWebアプリのBefore／After図
  - 入力項目と出力物の説明
- Risk：勤務先名、顧客名、装置名、IPアドレス、ポート情報、実在ラック構成を出さない
- Repository：現時点で対応する公開リポジトリは確認できていない

### 6.2 Internal Knowledge Search

- Classification：Private Case / Featured
- Category：Business / Search
- Score：29 / 35（暫定）
- Problem：複数人がExcelへ追記した「虎の巻」から必要情報を探すのに時間がかかる
- Solution：複数の情報を一括検索し、必要な行や関連情報を見つけられる仕組み
- Portfolio angle：「新しいAIを導入する」より先に、「既存情報を探せる状態にする」という現実的な改善
- Required assets：
  - ダミーデータ
  - 検索画面
  - ヒット箇所の強調表示
  - 元Excelから検索までのデータフロー
- Risk：社内ノウハウ、障害情報、顧客情報、認証情報、構成情報を出さない
- Repository：現時点で対応する公開リポジトリは確認できていない

### 6.3 Threads Operations System

- Classification：Featured
- Category：SNS / Automation / AI Operations
- Score：30 / 35
- Problem：投稿予定、画像、履歴、投稿実行、分析、トークン、エラー対応が複数の場所へ分散する
- Solution：AIチャット、GitHub、GitHub Actions、Threads API、投稿台帳をつなぎ、運用全体を管理する
- Portfolio angle：単なる自動投稿ではなく、「安全に続ける運用」を設計している
- Main elements：
  - テキスト・画像・ツリー投稿
  - 投稿日時と投稿枠管理
  - 投稿結果とエラーの書き戻し
  - 投稿履歴・類似投稿検索
  - 機密値のマスク
  - 復旧用Artifact
  - インサイト確認
  - 長期トークン管理
- Related repositories：
  - `goroyattemiyo/threads-chatgpt-autopilot-template`：Public、v0.1、販売前検証中
  - `goroyattemiyo/threads-auto-pilot-goro`：Private、実運用側の参照実装
  - `goroyattemiyo/threads-note-autopilot`：Public、個別運用例。READMEの公開方針を要修正
  - `goroyattemiyo/insight-master-demo`：Public、ブラウザで操作できる分析デモ
  - `goroyattemiyo/insight-master`：Public、README未確認
  - `goroyattemiyo/threads-token-manager-center`：Private。ルートREADMEは確認できず、note記事のみ確認
- Related note：
  - Threads自動投稿を止めないための長期トークン管理センター
  - https://note.com/goro_yattemiyo/n/nff7625ffea40
- Required assets：
  - システム全体図
  - AIチャットから投稿までの短い操作動画
  - ダミー投稿台帳
  - Insight Masterのデモ画面
  - 公開部分とPrivate部分の境界図
- Limitations：
  - 汎用テンプレートは販売前検証中
  - GitHub Actionsの時刻は厳密保証ではない
  - 顧客導入リハーサルなど未検証項目が残る
- Risk：アクセストークン、顧客設定、投稿予定、非公開履歴を出さない

### 6.4 Rakuten Select Assist

- Classification：Featured
- Category：Business / Recommendation / Web App
- Score：29 / 35
- Problem：ランキング、価格、レビューを行き来し、商品選定に時間がかかる
- Solution：楽天APIから商品を検索し、比較軸とスコアを使って候補を絞るWebアプリ
- Portfolio angle：曖昧な「選ぶ作業」を、比較基準がある意思決定フローへ変えた
- Repository：`goroyattemiyo/rakuten-select-assist`
- Repository state：Public、MVP開発中
- note article：
  - https://note.com/goro_yattemiyo/n/n91ab5977ab1d
- Outcome：noteには本人の利用例として「2時間から15分」と記載されている。LPでは本人のケースであることを明記し、一般的な効果として断定しない
- Required assets：
  - `/genre-search` と `/genre-results` の画面
  - 比較スコアの説明
  - 検索から選定までの動画
  - APIキーなしでも理解できるモックデモ
- Limitations：
  - MVP開発中
  - トップ画面と旧結果画面が未統合
  - 投稿文生成機能は未実装

### 6.5 IrodoriTTS Studio

- Classification：Featured
- Category：Audio / AI / Creative Tool
- Score：27 / 35
- Problem：音声生成、参照音声、長文分割、保存、試聴、動画変換が複数工程に分かれる
- Solution：IrodoriTTSをGoogle ColabとブラウザGUIから扱い、VoiceDesign、台本生成、SNS用動画変換を一つの制作フローへ整理する
- Portfolio angle：AIモデルそのものを開発したのではなく、利用者が使える制作環境と導線を設計した
- Repository：`goroyattemiyo/irodori-tts-studio`
- Repository state：Public、一部整備中、License未定
- note article：
  - https://note.com/goro_yattemiyo/n/n040c37146e70
- Required assets：
  - VoiceDesign画面
  - Studio画面
  - 台本から音声までのフロー
  - 権利上問題のない短い音声サンプル
  - 上流のIrodoriTTSとの関係図
- Limitations：
  - 一部の管理・結合・再生成機能は整備中
  - ColabのGPU・セッション制限がある
  - IrodoriTTS本体は外部プロジェクト
- Risk：上流ライセンス、生成音声、参照音声、人物の声の権利を確認する

### 6.6 LINE Stamp Maker

- Classification：Featured / Small Tool
- Category：Image / Automation / Creative
- Score：30 / 35
- Problem：大量のスタンプ画像を分割し、背景を消し、LINE仕様へ揃える工程が面倒
- Solution：画像のグリッド分割、背景除去、必要枚数選択、ファイル名調整、ZIP生成をブラウザ内で完結する
- Portfolio angle：明確な制作工程を、サーバー不要の小さなツールへまとめた
- Repository：`goroyattemiyo/Background-removal-splitting`
- Demo：
  - https://goroyattemiyo.github.io/Background-removal-splitting/
- note article：
  - https://note.com/goro_yattemiyo/n/n222268153952
- Strong point：公開デモがあり、画像を外部へ送らない設計を説明できる
- Required assets：
  - 入力画像は自作または利用許諾済み素材を使う
  - 分割前／分割後／ZIP生成の画面
  - 15〜30秒の操作動画
- Risk：AI生成画像やスタンプ素材の権利、LINE Creators Marketの最新仕様を公開前に再確認する

## 7. Supporting Works

| Work | Classification | Score | Use in portfolio | Cleanup |
|---|---|---:|---|---|
| Insight Master Demo | Supporting / Threads case component | 30 | Threads事例の分析画面として使用 | 本体との差、デモデータであることを明記 |
| Screenshot Smart Sorter | Supporting | 27 | 「小さな不便をスマホアプリにする」例 | スクリーンショット、APKまたは動画、プライバシー説明 |
| Synapse | Experiment / Supporting | 23 | 複数AIによる設計・レビュー思想を示す | 現行モデル名、費用例、実装状況の再確認 |
| Coffee Brewing App | Experiment | 24 | AIを使った試行錯誤と技術選定変更の初期例 | 古い実装として扱い、主力にはしない |
| GAS LP Deployment Guide | Knowledge proof | - | 非エンジニア向けに手順を説明できる証拠 | 公開設定とセキュリティ注意を追加確認 |
| AA Copy Tool | Experiment | 22 | PWA・拡張機能・同期設計の例 | README上は全Phase未完了。完成後に再評価 |
| Background Removal / Splitting | Featuredへ統合 | 30 | LINE Stamp Makerとして掲載 | リポジトリ名と製品名を整理 |

### Supporting repository links

- `goroyattemiyo/screenshot-sorter`
- `goroyattemiyo/Synapse`
- `goroyattemiyo/aa-copy-tool`

### Supporting note links

- Coffee app：https://note.com/goro_yattemiyo/n/n0e9331efcf8a
- GAS公開ガイド：https://note.com/goro_yattemiyo/n/n37810fc70de1

## 8. note Inventory

noteは全記事をLPへ並べず、次の3つの役割に分ける。

### A. Case Story

制作理由、課題、結果を説明する記事。事例ページから直接リンクする。

- Rakuten Select Assist
- IrodoriTTS
- LINE Stamp Maker
- Threadsトークン管理
- コーヒーアプリ

### B. Expertise

相談相手としての知識や説明力を示す記事。プロフィール下部に3〜5件だけ表示する。

- NotebookLMの初級・中級・上級
- AI活用の現実と限界
- GAS公開・共有・固定URL
- プロンプト設計シリーズ
- AIリスクとリテラシー

### C. Music / Creative Identity

音楽家としての活動と、AIクリエイティブへの理解を示す。

- コントラバス奏法記事
- Suno実践ガイド
- 音源分離から楽譜化する検証
- AI音声・AI音楽の制作記録

### noteの扱い

- LPの主役は制作物と課題解決事例
- noteは詳細を読みたい人向けの二次導線
- 有料記事へリンクする場合、リンク先が有料であることを明記する
- 古い仕様の記事には「執筆時点」の表示を付ける
- 現在の仕様と異なる可能性がある記事を、現行サービスの説明資料として使わない

## 9. Initial Publication Order

### Phase A：匿名業務デモ完成前

1. Threads Operations System
2. LINE Stamp Maker
3. Rakuten Select Assist
4. IrodoriTTS Studio
5. Insight Master DemoなどのSupporting Works
6. Rack DiagramとInternal Knowledge Searchは「匿名事例準備中」または簡潔な概要のみ

### Phase B：匿名業務デモ完成後

1. Rack Diagram Web App
2. Internal Knowledge Search
3. Threads Operations System
4. Rakuten Select Assist
5. IrodoriTTS Studio
6. LINE Stamp Maker

## 10. Required Assets per Featured Work

- [ ] タイトル
- [ ] 50〜80文字の概要
- [ ] Before
- [ ] Problem
- [ ] Solution
- [ ] Process diagram
- [ ] Main screenshot
- [ ] Mobile screenshot if applicable
- [ ] Short operation video
- [ ] Technologies
- [ ] Limitations
- [ ] Future improvements
- [ ] GitHub URL
- [ ] note URL
- [ ] Demo URL
- [ ] Confidentiality check
- [ ] Rights／license check
- [ ] Current development status

## 11. Do Not Publish

- APIキー、トークン、秘密鍵
- 実在する顧客・勤務先の内部情報
- IPアドレス、ホスト名、ネットワーク構成
- 個人情報を含むExcelやPDF
- 実際の投稿予定や顧客アカウント設定
- 権利を持たない画像、音源、文章、人物の声
- セキュリティ上の手順を詳細に公開すると危険な構成
- 実測していない改善率
- 開発中のものを完成品と誤認させる表現

## 12. Next Actions

1. Rack Diagramの匿名再現版に必要な画面とダミーデータを定義する
2. Internal Knowledge Searchの匿名データ構造を定義する
3. Threads関連リポジトリの公開／Private境界とREADMEを整理する
4. 各Featured事例のメイン画像を1枚ずつ準備する
5. 6事例の50〜80文字コピーを確定する
6. ロゴラフとLPワイヤーフレームへ進む
