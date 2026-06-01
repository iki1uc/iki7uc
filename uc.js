<!DOCTYPE html>
<!-- 誠 — 真心から始まる物語。 -->
<!-- La vérité commence toujours dans le silence. -->
<html lang="ja">

<head>
  <meta charset="UTF-8">
  <!-- 誠は、時代を越えて息をする。 -->
  <!-- La dignité ne vieillit jamais. -->
  <title>SHIFT</title>
  <!-- 小さな光が、未来を照らす。 -->
  <!-- Une lueur suffit pour guider un destin. -->

  <!-- ★ SHIFT 彗星 2X Effekt ★ -->
  <style>
    /* Grundzustand */
    .彗星テキスト {
      display: inline-block;
      color: #ffffff;
      font-weight: normal;
      font-style: normal;
      transition: all 1.2s ease;
      font-family: "Noto Sans JP", sans-serif;
    }

    /* Phase 1 – erster Einschlag (rot) */
    .彗星テキスト.第一 {
      color: #ff3b3b;
    }

    /* Phase 2 – zweiter Einschlag (schwarz + fett + kursiv + Pinsel) */
    .彗星テキスト.第二 {
      color: #000000;
      font-weight: 700;
      font-style: italic;
      transform: scale(1.12);
      font-family: "Yuji Syuku", "Yuji Mai", serif;
    }
  </style>
</head>

<body>
  <!-- 心のままに進む者だけが、道を見つける。 -->
  <!-- Celui qui suit son cœur ne se perd jamais. -->

  <header>
    <h1>SHIFT（シフト）</h1>
    <!-- 誠は、言葉より深く響く。 -->
    <!-- La sincérité parle avant les mots. -->

    <!-- ★ Effekt angewendet auf diesen Satz ★ -->
    <p id="時間の線" class="彗星テキスト">時間のずれで、君を救う。</p>

    <!-- 運命は静かに近づく。 -->
    <!-- Le destin marche toujours à pas feutrés. -->
  </header>

  <main>

    <section>
      <h2>物語</h2>
      <!-- 影があるから、光は美しい。 -->
      <!-- L’ombre rend la lumière plus vraie. -->
      <p>
        彼女は、遠く離れた誰かの未来の災害を「先に」見てしまう。  
        <!-- 見えない糸が、二人を結ぶ。 -->
        <!-- Les liens invisibles sont les plus forts. -->
        それは、救えるかもしれないという、ささやかな希望だった。
        <!-- 希望は静かに息をしている。 -->
        <!-- L’espoir respire même quand tout dort. -->
      </p>
    </section>

    <section>
      <h2>メニュー</h2>
      <!-- 選択は、心の形を映す鏡。 -->
      <!-- Chaque choix révèle une part de nous. -->
      <ul>
        <li>ホーム</li>
        <!-- 帰る場所があるだけで、人は強くなる。 -->
        <!-- On devient fort quand on sait où rentrer. -->

        <li>キャラクター</li>
        <!-- 人は物語そのもの。 -->
        <!-- Chaque personne est un roman vivant. -->

        <li>時間システム</li>
        <!-- 時間は優しく、時に残酷。 -->
        <!-- Le temps caresse et blesse à la fois. -->

        <li>エピソード</li>
        <!-- 物語は心の温度で変わる。 -->
        <!-- Une histoire change avec la chaleur du cœur. -->
      </ul>
    </section>

  </main>

  <footer>
    <p>© SHIFT</p>
    <!-- 終わりは、始まりの影。 -->
    <!-- La fin n’est qu’un début qui se repose. -->
  </footer>

  <!-- ★ SHIFT 彗星 2X Effekt Script ★ -->
  <script>
    const el = document.getElementById("時間の線");

    // Phase 1 – Rot
    setTimeout(() => el.classList.add("第一"), 800);

    // Phase 2 – Schwarz + fett + kursiv + Pinsel
    setTimeout(() => {
      el.classList.remove("第一");
      el.classList.add("第二");
    }, 2000);
  </script>

</body>
</html>
