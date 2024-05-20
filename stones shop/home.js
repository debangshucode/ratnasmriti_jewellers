function openmenu() {
    let sidemenu = document.querySelector('.top_nav .menu');
    let menuIcon = document.getElementById('menuIcon');

    // Get the computed style of the element
    let computedStyle = window.getComputedStyle(sidemenu);
    let maxHeight = computedStyle.getPropertyValue('max-height');

    if (maxHeight === "0px") {
        sidemenu.style.maxHeight = "500px";
        menuIcon.className = "fas fa-xmark";
    } else {
        sidemenu.style.maxHeight = "0px";
        menuIcon.className = "fas fa-bars";
    }
}


document.addEventListener("DOMContentLoaded", function() {
    const prevEl = document.querySelector(".prev");
    const nextEl = document.querySelector(".next");
    const imgEls = document.querySelectorAll(".slimg");
    const imageContainerEl = document.querySelector(".image-container");
    const dotsContainerEl = document.querySelector(".dots-container");

    let currentImg = 0;
    let interval;

    function updateImg() {
        const translateValue = -(currentImg * 100) + "%";
        imageContainerEl.style.transform = `translateX(${translateValue})`;
        updateDots();
    }

    function nextImg() {
        currentImg++;
        if (currentImg >= imgEls.length) {
            currentImg = 0;
        }
        updateImg();
    }

    function prevImg() {
        currentImg--;
        if (currentImg < 0) {
            currentImg = imgEls.length - 1;
        }
        updateImg();
    }

    function updateDots() {
        dotsContainerEl.innerHTML = "";
        imgEls.forEach((_, index) => {
            const dot = document.createElement("span");
            dot.classList.add("dot");
            if (index === currentImg) {
                dot.classList.add("active");
            }
            dot.addEventListener("click", () => {
                currentImg = index;
                updateImg();
            });
            dotsContainerEl.appendChild(dot);
        });
    }

    prevEl.addEventListener("click", prevImg);
    nextEl.addEventListener("click", nextImg);

    function startSlideshow() {
        interval = setInterval(nextImg, 3000);
    }

    function stopSlideshow() {
        clearInterval(interval);
    }

    startSlideshow();

    imageContainerEl.addEventListener("mouseenter", stopSlideshow);
    imageContainerEl.addEventListener("mouseleave", startSlideshow);
});

// call popup
document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.querySelector(".top_nav i");
    const menu = document.querySelector(".top_nav .menu");
    const callButton = document.querySelector(".call");
    const popup = document.getElementById("call-popup");
    const closeBtn = document.querySelector(".close-btn");

    menuIcon.addEventListener("click", function() {
        if (menu.style.maxHeight) {
            menu.style.maxHeight = null;
        } else {
            menu.style.maxHeight = menu.scrollHeight + "px";
        }
    });

    callButton.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default anchor click behavior
        popup.style.display = "flex"; // Show the pop-up
    });

    closeBtn.addEventListener("click", function() {
        popup.style.display = "none"; // Hide the pop-up
    });

    // Optional: Close the pop-up when clicking outside the pop-up content
    window.addEventListener("click", function(event) {
        if (event.target == popup) {
            popup.style.display = "none";
        }
    });
});
