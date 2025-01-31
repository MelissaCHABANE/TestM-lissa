const wrapper = document.querySelector( ".wrapper");
const question = document.querySelector("".question");
const gif = document.querySelector(".gif");
const yes = document.querySelector(".yes");
const no = document.querySelector("".no");

yes.addEventListener("click", () => {
    question.innerHTML = "I LOVE YOU TOO! ❤️";
    gif.src = "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNXZnemlveHdpYW9paWxzazRkYTRiZGtzaXFzMXc4bXdxcnh3NHZvaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/KztT2c4u8mYYUiMKdJ/giphy.gif"
});

no.style.position = "absolute"; // Assurer que le bouton « No » peut bouger

no.addEventListener( "mouseover" , () => {
    const noRect = no.getBoundingClientRect();
    const maxX = window.innerWidth - noRect.width;
    const maxY = window.innerHeight - noRect.height; // Correction ici

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    no.style.left = randomX + "px";
    no.style.top = randomY + "px" ;
});