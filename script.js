const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

const questionBox = document.getElementById("questionBox");
const formBox = document.getElementById("formBox");
const termsBox = document.getElementById("termsBox");

let count = 0;
let scale = 1;

noBtn.addEventListener("mouseover", () => {
    noBtn.style.left = Math.random() * 250 + "px";
    noBtn.style.top = Math.random() * 100 + "px";

    scale += 0.15;
    yesBtn.style.transform = `scale(${scale})`;

    count++;

    if (count > 5) {
        noBtn.style.display = "none";
    }
});

yesBtn.addEventListener("click", () => {
    questionBox.classList.add("hidden");
    formBox.classList.remove("hidden");
});

document.getElementById("continueBtn").addEventListener("click", (e) => {
    e.preventDefault();

    document.getElementById("continueBtn").style.display = "none";

    termsBox.classList.remove("hidden");
});