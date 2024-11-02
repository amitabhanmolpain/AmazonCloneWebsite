let slideBtnLeft = document.getElementById("slide-btn-left");
let slideBtnRight = document.getElementById("slide-btn-right");
let imgItem = document.querySelectorAll(".image-item");

console.log(imgItem.length);

let startslider = 0;
let totalSlides = imgItem.length; // Total number of slides

// Function to update the slider position
function updateSlider() {
    imgItem.forEach((element) => {
        element.style.transform = `translateX(${startslider}%)`;
    });
}

// Automatic slider function
function autoSlide() {
    // Move to the next slide
    startslider -= 100;

    // Reset to the first slide if it goes beyond the last
    if (Math.abs(startslider) >= totalSlides * 100) {
        startslider = 0;
    }

    updateSlider();
}

// Set an interval for the automatic slider
let autoSliderInterval = setInterval(autoSlide, 5000); // Slides every 3 seconds

slideBtnLeft.addEventListener("click", () => {
    // Move left
    startslider += 100; // Adjust to move left
    if (startslider > 0) {
        startslider = -(totalSlides - 1) * 100; // Loop back to the last slide
    }

    console.log(startslider);
    updateSlider();
});

slideBtnRight.addEventListener("click", () => {
    // Move right
    startslider -= 100; // Adjust to move right
    if (startslider < -(totalSlides - 1) * 100) {
        startslider = 0; // Loop back to the first slide
    }

    console.log(startslider);
    updateSlider();
});
