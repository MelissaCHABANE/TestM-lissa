const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yes = document.querySelector(".yes");
const no = document.querySelector(".no");

// ✅ Quand on clique sur "Oui", le texte change
yes.addEventListener("click", () => {
    question.innerHTML = "I LOVE YOU TOO! ❤️";
});

// ✅ Quand la souris approche, "Non" fuit
no.addEventListener("mouseover", () => {
    const maxX = window.innerWidth - no.clientWidth - 20;
    const maxY = window.innerHeight - no.clientHeight - 20;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    no.style.position = "absolute"; // Assure-toi que le bouton peut bouger
    no.style.left = `${randomX}px`;
    no.style.top = `${randomY}px`;
});
