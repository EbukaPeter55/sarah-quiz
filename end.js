const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");
const numCorrect = localStorage.getItem("numCorrect");
const time = localStorage.getItem('time');
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

const MAX_HIGH_SCORES = 5;

finalScore.innerText = numCorrect;

username.addEventListener("keyup", () => {
  saveScoreBtn.disabled = !username.value;
});

saveHighScore = e => {
  console.log("clicked the save button!");
  e.preventDefault();

  const score = {
    score: numCorrect,
    name: username.value,
    time: time
  };
  highScores.push(score);
  highScores.sort((a, b) => b.score - a.score);

  //once the scores are up to 5, splice out or remove other scores
  highScores.splice(5);

  localStorage.setItem("highScores", JSON.stringify(highScores));
  window.location.assign("highscores.html");
};
