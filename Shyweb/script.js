let score = 0;

function afficherQuiz(nom) {
  let quizs = document.querySelectorAll(".quiz");
  quizs.forEach(function (q) {
    q.style.display = "none";
  });
  document.getElementById("quiz-" + nom).style.display = "block";
}

function repondre(estBonne, idResultat) {
  let resultat = document.getElementById(idResultat);

  if (estBonne) {
    resultat.textContent = "Bravo, bonne réponse !";
    score = score + 1;
    document.getElementById("score").textContent = score;
  } else {
    resultat.textContent = "Raté, essaie encore !";
  }
}
// ===== PETales VIOLETS QUI TOMBENT =====

const petalSymbols = ["❀", "✿", "❋", "✾"];
const petalCount = 18;

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    for (let i = 0; i < petalCount; i++) {
        const petal = document.createElement("span");

        petal.className = "petal";
        petal.textContent =
            petalSymbols[Math.floor(Math.random() * petalSymbols.length)];

        petal.style.left = Math.random() * 100 + "vw";
        petal.style.setProperty("--size", (12 + Math.random() * 12) + "px");
        petal.style.setProperty("--duration", (7 + Math.random() * 8) + "s");
        petal.style.setProperty("--delay", (-Math.random() * 15) + "s");

        document.body.appendChild(petal);
    }
}