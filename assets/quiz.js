/* 再利用クイズウィジェット。
 *
 * 使い方（HTML側）:
 *   <div class="quiz">
 *     <p class="quiz-q">設問文</p>
 *     <button class="quiz-opt" data-correct>正解の選択肢</button>
 *     <button class="quiz-opt">不正解の選択肢</button>
 *     <p class="quiz-fb">解答後に表示される解説。</p>
 *   </div>
 *
 * 選択肢の並び順は読み込み時にシャッフルされる（位置で答えを覚えないように）。
 * 一度回答したらロックされ、正解／不正解が色で示される。
 */
(function () {
  function shuffle(nodes, parent) {
    for (let i = nodes.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [nodes[i], nodes[j]] = [nodes[j], nodes[i]];
    }
    nodes.forEach((n) => parent.appendChild(n));
  }

  document.querySelectorAll(".quiz").forEach((quiz) => {
    const opts = Array.from(quiz.querySelectorAll(".quiz-opt"));
    const fb = quiz.querySelector(".quiz-fb");
    const anchor = fb || null;

    // シャッフルしてから、解説は必ず最後に置き直す
    shuffle(opts, quiz);
    if (anchor) quiz.appendChild(anchor);

    opts.forEach((opt) => {
      opt.addEventListener("click", () => {
        const isCorrect = opt.hasAttribute("data-correct");
        opts.forEach((o) => {
          o.disabled = true;
          if (o.hasAttribute("data-correct")) o.classList.add("correct");
        });
        if (!isCorrect) opt.classList.add("wrong");
        if (fb) fb.classList.add("show");
      });
    });
  });
})();
