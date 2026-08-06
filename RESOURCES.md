# LeetCode / コーディング面接 Resources

## Knowledge

- [NeetCode Roadmap](https://neetcode.io/roadmap)
  18カテゴリを依存関係順に並べた学習ロードマップ。各トピックが前のトピックの上に積み上がる設計。
  使いどころ：「次に何を勉強すべきか」を決めるとき。本ワークスペースの進行順の土台。

- [NeetCode 150](https://neetcode.io/practice?tab=neetcode150)
  Blind 75 + 75問。全問に動画解説あり。「重要なパターンを網羅する最小集合」という設計思想。
  使いどころ：各レッスンの練習問題を選ぶとき。1日1問ペースで2〜3ヶ月が標準。

- [Sean Prashad — LeetCode Patterns](https://seanprashad.com/leetcode-patterns/)
  問題をパターン別にグループ化した一覧。各問題に「どのパターンか」のヒントが付く。
  使いどころ：ある問題で詰まったとき、同じパターンの別問題を横に並べて練習する（interleaving）。

- [Tech Interview Handbook — Algorithms Study Cheatsheets](https://www.techinterviewhandbook.org/algorithms/study-cheatsheet/)
  データ構造ごとに、計算量・頻出テクニック・コーナーケースを整理した高信頼リファレンス。
  使いどころ：`./reference/` の資料を作る際の裏取り。計算量やエッジケースの確認。

- [Grind 75](https://www.techinterviewhandbook.org/grind75/)
  元Metaエンジニア作。「週あたり何時間使えるか」を入力すると学習計画を生成する。
  使いどころ：短期集中の週次スケジュールを引くとき。

- [How to Prepare for Coding Interviews — NeetCode Blog](https://blog.neetcode.io/p/prepare-coding-interviews)
  問題数を稼ぐのではなくパターンを内在化せよ、という方法論。20〜30分詰まったら解答を読む、という時間設計の根拠。
  使いどころ：学習の進め方そのものに迷ったとき。

- [USACO Guide — Binary Search（Silver）](https://usaco.guide/silver/binary-search)
  述語 `f(x)` を軸にした二分探索の解説。「単調関数上の二分探索」「`f(x) = true` となる最小／最大の `x`」の
  4節構成で、答えを二分探索する型（875 / 1011）の一次資料として最も筋が通っている。
  使いどころ：**Lesson 17 の主資料**。「最小」と「最大」の書き分けを確認するとき。
  注意：競技プログラミング向けなので C++/Java 中心。式と考え方だけ読めばよい。

## Wisdom (Communities)

- [r/leetcode](https://reddit.com/r/leetcode)
  面接体験記、詰まりどころの相談、企業別の傾向。ノイズもあるが体験談の量が圧倒的。
  使いどころ：特定企業の面接傾向、モチベーション管理。

- [r/cscareerquestions](https://reddit.com/r/cscareerquestions)
  面接プロセス全体（応募〜オファー交渉）の議論。
  使いどころ：コーディング以外の面接フェーズの話。

- [Pramp / interviewing.io](https://www.interviewing.io/)
  実在のエンジニアと模擬面接。「声に出して説明する」練習は独学では代替できない。
  使いどころ：50問ほど解いた後。ミッションの「口頭で説明できる」に直結する。

## 志望先由来の資料（2026-07-30 追加）

- **日系メガベンチャー向けトピック別ROI表**（ユーザー提供、出典未確認）
  トピックごとの「習得までのコスト × 投資対効果」の対照表。配列と文字列が唯一の★5、DPが★1。
  使いどころ：**時間の配分**を決めるとき。`reference/study-plan.html` v2 の根拠。
  注意：出典が未確認で、FAANG系の頻度データ（木・グラフが実質2番目に重い）とは食い違う。
  志望先が日系メガベンチャー中心である限りは採用する、という条件付きの採用。

- **良問リスト 約140問**（ユーザー提供、出典未確認）
  カテゴリ・難易度・重要度つきのLeetCode問題リスト。
  使いどころ：**配分内での問題選択**。`reference/problem-set.html` で56問に選抜済み。
  注意：重要度「高」は**カテゴリ内**の順位として読むこと。全問やると100時間超で復習が消える。

## Gaps

- 日本語圏の高信頼リソースが未調査（上記2点はユーザー提供で出典未確認。一次情報の裏取りが未了）
- 志望先の選考形式が未確認（オンラインテスト形式か、面接官との対話形式か）。DPを3問に削った賭けの成否はここに依存する
- Python固有の落とし穴（デフォルト引数、再帰上限、`sort` の安定性など）をまとめた信頼できる単一ソースが未特定
