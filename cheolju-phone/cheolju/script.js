// 실제 퀴즈 정답으로 "정답" 부분만 바꾸세요.
const CORRECT_ANSWER = "58137";

const startScreen = document.getElementById("startScreen");
const quizScreen = document.getElementById("quizScreen");
const homeScreen = document.getElementById("homeScreen");
const viewerScreen = document.getElementById("viewerScreen");
const answerInput = document.getElementById("answerInput");
const quizMessage = document.getElementById("quizMessage");

function showScreen(target) {
  [startScreen, quizScreen, homeScreen, viewerScreen].forEach(screen => screen.classList.remove("active"));
  target.classList.add("active");
}

startScreen.addEventListener("click", () => {
  showScreen(quizScreen);
  setTimeout(() => answerInput.focus(), 50);
});

document.getElementById("quizForm").addEventListener("submit", event => {
  event.preventDefault();
  const userAnswer = answerInput.value.trim().toLowerCase();
  const correctAnswer = CORRECT_ANSWER.trim().toLowerCase();

  if (userAnswer === correctAnswer) {
    quizMessage.textContent = "";
    answerInput.value = "";
    showScreen(homeScreen);
  } else {
    quizMessage.textContent = "정답이 아닙니다.";
    answerInput.select();
  }
});

document.getElementById("communityApp").addEventListener("click", () => {
  showScreen(viewerScreen);
});

document.getElementById("backButton").addEventListener("click", () => {
  showScreen(homeScreen);
});
