const highScoresList = document.getElementById("highScoresList");
const time = document.getElementById("time");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
const display = new Date(parseInt(localStorage.getItem('time')));

time.innerHTML = display
highScoresList.innerHTML = highScores
  .map(score => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`;
  })
  .join("");
