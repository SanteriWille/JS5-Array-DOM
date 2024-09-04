const button = document.querySelector(".btn");
const bilder = document.querySelectorAll(".img-container img");

button.onclick = () => {
    bilder.forEach((bilde) => {
        bilde.style.display = 'none'; 
    });

    const tilfeldigIndex = Math.floor(Math.random() * bilder.length);
    bilder[tilfeldigIndex].style.display = 'block'; 
};
