const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const message = document.getElementById("message");

let noCount = 0;

noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * 300 - 150;
    const y = Math.random() * 100 - 50;

    noBtn.style.transform = `translate(${x}px, ${y}px)`;

    noCount++;

    yesBtn.style.transform = `scale(${1 + noCount * 0.1})`;

    if (noCount === 3) noBtn.innerText = "Are you sure? 😅";
    if (noCount === 5) noBtn.innerText = "Think again 😏";
    if (noCount === 7) noBtn.innerText = "Just say Yes 💖";
});

yesBtn.addEventListener("click", () => {
    message.innerHTML = "Yay! 💘 I knew it! Happy Valentine’s Day 🥰";
    noBtn.style.display = "none";
});
