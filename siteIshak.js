const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yes = document.querySelector(".yes");
const no = document.querySelector(".no");

yes.addEventListener("click", () => {
    question.innerHTML = "I LOVE YOU TOO! ❤️";
});

no.addEventListener("mouseover", () => {
    const maxX = window.innerWidth - no.clientWidth;
    const maxY = window.innerHeight - no.clientHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    no.style.left = `${randomX}px`;
    no.style.top = `${randomY}px`;
});
