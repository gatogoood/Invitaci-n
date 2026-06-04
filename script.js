const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const message = document.getElementById("message");

const questionBox = document.getElementById("questionBox");
const formBox = document.getElementById("formBox");
const termsBox = document.getElementById("termsBox");
const finalBox = document.getElementById("finalBox");

let noCount = 0;
let yesSize = 1;

const messages = [
  "¿Segura? 😿",
  "Piénsalo otra vez 🥺",
  "El gatito se pondrá triste 😭",
  "No puedes escapar 😼",
  "El sí es inevitable 💖"
];

noBtn.addEventListener("mouseover", () => {
  noCount++;

  const x = Math.random() * 250;
  const y = Math.random() * 100;

  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";

  yesSize += 0.2;
  yesBtn.style.transform = `scale(${yesSize})`;

  message.textContent = messages[Math.min(noCount - 1, messages.length - 1)];

  if(noCount > 5){
    noBtn.style.display = "none";
  }
});

yesBtn.addEventListener("click", () => {
  questionBox.classList.add("hidden");
  formBox.classList.remove("hidden");
});

document.getElementById("continueBtn").addEventListener("click", () => {
  formBox.classList.add("hidden");
  termsBox.classList.remove("hidden");
});

document.getElementById("acceptBtn").addEventListener("click", () => {
  termsBox.classList.add("hidden");
  finalBox.classList.remove("hidden");
});
