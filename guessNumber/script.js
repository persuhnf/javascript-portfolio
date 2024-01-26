"use strict";
// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "🎉 Correct Number!";
// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 10;
// console.log(document.querySelector(".guess").value);
// document.querySelector(".guess").value = 23;

// document.querySelector(".check").addEventListener("click", function () {
//   console.log(document.querySelector(".guess").value);
// });

let randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if (!guess) {
    // document.querySelector(".message").textContent = "⛔️ No number!";
    displayMessage("⛔️ No number!");
  } else if (guess === randomNumber) {
    // document.querySelector(".message").textContent = "🎉 Correct Number!";
    displayMessage("🎉 Correct Number!");
    document.querySelector(".number").textContent = randomNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== randomNumber) {
    if (score > 1) {
      displayMessage(guess > randomNumber ? "📈 Too high!" : "📉 Too low!");
      score--;
      document.querySelector(".score").textContent = score;
      // document.querySelector(".message").textContent =
      //   guess > randomNumber ? "📈 Too high!" : "📉 Too low!";
    } else {
      // document.querySelector(".message").textContent = "💥 You lost the game!";
      displayMessage("💥 You lost the game!");
      document.querySelector(".score").textContent = 0;
    }
  }

  //(guess > randomNumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "📈 Too high!";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "💥 You lost the game!";
  //     document.querySelector(".score").textContent = 0;
  //   }
  // } else if (guess < randomNumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "📉 Too low!";
  //  score--   ;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "💥 You lost the game!";
  //     document.querySelector(".score").textContent = 0;
  //   }
  // }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
});
