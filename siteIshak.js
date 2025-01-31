const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yes = document.querySelector(".yes");
const no = document.querySelector(".no");

yes.addEventListener("click", () => {
    question.innerHTML = "I LOVE YOU TOO! ❤️";
    gif.src = "https://media.giphy.com/media/jUwpNzg9IcyrK/giphy.gif"; // URL du GIF
    gif.classList.remove("hidden"); // Afficher l’image
});

no.style.position = "absolute"; // S'assurer qu'il peut bouger

no.addEventListener("mouseover", () => {
    const noRect = no.getBoundingClientRect();
    
    // Limites pour éviter que le bouton sorte de l’écran
    const maxX = window.innerWidth - noRect.width;
    const maxY = window.innerHeight - noRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    no.style.left = `${randomX}px`;
    no.style.top = `${randomY}px`;
});
