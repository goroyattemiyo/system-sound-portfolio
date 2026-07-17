# Business Card Specification

## 1. Purpose

名刺は連絡先を渡す紙ではなく、ポートフォリオサイトへつなぐ最初の体験とする。

表面でAIソリューションエンジニアとしての役割を伝え、裏面でコントラバス／ベース奏者としての個性を見せる。

二面性は分裂ではなく、`SYSTEM / SOUND` という一つのブランドとして統一する。

## 2. Print Specification

- 日本標準サイズ：91mm × 55mm
- 横型
- 両面カラー
- 塗り足し：上下左右3mm
- セーフティマージン：仕上がり線から4mm以上
- カラーモード：CMYK
- 画像解像度：300dpi相当
- QRコード：印刷後の実寸で18〜22mm角を目安
- QRコード周囲：4セル以上の余白
- 小さい本文：7.5pt未満を避ける
- 細線：0.25pt未満を避ける

紙、加工、印刷会社のプロファイルに合わせ、最終的な色調整を行う。

## 3. Front Side — SYSTEM

### Role

AIソリューションエンジニアとして、何を相談できる人かを伝える。

### Information

- 氏名
- `AI SOLUTION ENGINEER`
- `業務改善・AI導入・自動化支援`
- ポートフォリオURL
- メールまたは問い合わせ先
- QRコード
- 必要に応じて活動地域

サービス項目は載せすぎない。最大3項目程度にする。

例：

- 業務自動化
- 小規模Webアプリ
- AI活用支援

### Layout Direction A — Left Information / Right Symbol

- 左側：氏名、肩書き、補足
- 右側：F字孔シンボルとQRコード
- 下端：URLと連絡先

### Layout Direction B — Spotlight

- 中央寄りに氏名と肩書き
- 背景のF字孔へ斜めのスポットライト
- QRコードは右下
- 赤い点をCTAのようにQR付近へ置く

### Colors

- 背景：Stage Black `#0B0B0C`
- 主要文字：Warm Ivory `#F2EBDD`
- シンボル：Varnished Maple `#C77732`
- 細線：Deep Wood `#6B351C`
- 赤：Accent Red `#D51624`、一点のみ

## 4. Back Side — SOUND

### Role

コントラバス／ベース奏者としての活動と、技術面だけではない人物の奥行きを伝える。

### Information

- `CONTRABASS / ELECTRIC BASS`
- `Musician`
- 音楽活動用リンクまたは共通ポートフォリオQR
- 必要に応じて `Music Creation / AI Audio`

QRコードを表裏に二つ置く場合は、用途の違いを明記する。原則はポートフォリオへの共通QR一つを推奨する。

### Visual

- 艶のある明るい橙褐色の木部
- F字孔または楽器の曲線を大きくトリミング
- 周辺は黒へ溶け込ませる
- スポットライトの反射を利用
- 赤は弦、録音ランプ、小さな記号として一点のみ

楽器全体の写真を小さく載せるより、木目、F字孔、弦の接写を大胆に使う。

## 5. Shared Logo / Symbol

F字孔とFrequencyを重ねたシンボルを表裏で共通使用する。

- 表面：信号、接続、SYSTEMとして見せる
- 裏面：共鳴、空気、SOUNDとして見せる

同じ形を色と周囲の構成で読み替える。

### Minimum Versions

- Full logo：シンボル＋SYSTEM / SOUND
- Symbol only：F字孔
- Monochrome black
- Monochrome white
- Wood color

## 6. Copy Candidates

### Main

**仕事の中にある「毎回面倒」を、AIと小さな仕組みで改善します。**

名刺では長いため、必要に応じて以下へ短縮する。

- `現場の面倒を、小さな仕組みで。`
- `AIを、現場で使える形へ。`
- `SYSTEM / SOUND — Structure that works.`

最初の版では、肩書きとサービス内容を優先し、コピーは裏面または小さな補助表示とする。

## 7. Paper Candidates

### Candidate A：マットブラック系

- 黒の深さと高級感が出る
- 白や木色の発色確認が必要
- オンデマンド印刷では黒ベタのムラに注意

### Candidate B：ナチュラルな厚紙

- 木や生成りの温かさと相性がよい
- 黒ベタが沈む可能性がある
- 親しみやすさが増す

### Candidate C：片面マットPP

- 表面を黒くシャープに見せやすい
- 裏面の木の艶を印刷表現しやすい
- 指紋や反射の見え方を確認する

初回は、黒ベタの再現性が安定した印刷会社でマットPPまたは高白色厚紙をテストする。

## 8. Finishing Options

優先順位：

1. 厚めの紙
2. マットPP
3. F字孔または赤点への部分ニス
4. 木色への箔押し

部分ニスや箔は魅力的だが、初期版では費用対効果を確認する。加工がなくても成立するデザインを先に作る。

## 9. QR Destination

QRコードはLPのトップへリンクする。

可能であれば、名刺専用パラメータを付ける。

例：

`/?utm_source=business_card&utm_medium=offline`

アクセス解析を導入する場合も、個人を特定する過剰な計測は行わない。

## 10. Print Checklist

- [ ] 氏名・肩書きの表記確認
- [ ] メール・URLの入力確認
- [ ] QRコードを実機で読み取れる
- [ ] QRリンク先がHTTPSで公開されている
- [ ] 塗り足し3mmがある
- [ ] 重要情報がセーフティ領域内にある
- [ ] RGB画像が残っていない
- [ ] 黒ベタの設定を印刷会社仕様へ合わせた
- [ ] 細線・小さい文字が潰れない
- [ ] テスト印刷で木色と赤を確認した
- [ ] GitHubや勤務先の機密情報が含まれていない
