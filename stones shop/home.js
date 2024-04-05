function openmenu() {
    let sidemenu = document.getElementsByClassName('menu')[0];
    let menuIcon = document.getElementById('menuIcon');
    
    if (sidemenu.style.maxHeight === "0px" || sidemenu.style.maxHeight === "") {
        sidemenu.style.maxHeight = "500px";
        sidemenu.style.minHeight = "100vh";
        menuIcon.className = "fas fa-xmark"
    } else {
        sidemenu.style.maxHeight = "0px";
        sidemenu.style.minHeight = "0px";
        menuIcon.className = "fas fa-bars";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('menuIcon').addEventListener('click', openmenu);
});
const prevEl = document.querySelector(".prev");
const nextEl = document.querySelector(".next");
const imgEls = document.querySelectorAll(".slimg");
const imageContainerEl = document.querySelector(".image-container");
let currentImg = 1;
let timeout;

prevEl.addEventListener("click", () => {
    clearTimeout(timeout);
    currentImg--;
    updateImg();
});

nextEl.addEventListener("click", () => {
    clearTimeout(timeout);
    currentImg++;
    updateImg();
});

updateImg();

function updateImg() {
    imageContainerEl.style.transform = `translateX(-${(currentImg - 1) * 100}%)`;

    currentImg++;
    if (currentImg > imgEls.length) {
        currentImg = 1;
    }

    clearTimeout(timeout); // Clear the previous timeout
    timeout = setTimeout(updateImg, 3000);
}
window.onload = function() {
    const popularContainer = document.getElementById("popularContainer");
    const popularCards = document.querySelectorAll(".slcard");

    let currentIndex = 0;
    const totalCards = popularCards.length;

    function moveSlider() {
        currentIndex++;
        if (currentIndex >= totalCards-9) {
            currentIndex = 0;
        }
        const cardWidth = popularCards[0].offsetWidth;
        popularContainer.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }

    setInterval(moveSlider, 4000);
};
 



