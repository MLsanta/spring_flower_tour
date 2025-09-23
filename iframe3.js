const sliderTrack = document.querySelector(".container");

const images = ["대청호1.jpg", "대청호2.jpg", "대청호3.jpg", "대청호4.jpg"];

function createSlides() {
    for (let i = 0; i < 3; i++) {
        images.forEach((imgName) => {
            const slide = document.createElement("div");
            slide.className = "slide";
            const img = document.createElement("img");
            img.src = `./brough_img/${imgName}`;
            slide.appendChild(img);
            sliderTrack.appendChild(slide);
        });
    }
}

createSlides();

const totalSlides = images.length * 3;
const slideWidth = 200 + 20;
const originalSlideSetWidth = slideWidth * images.length;

let currentX = -originalSlideSetWidth;
sliderTrack.style.transform = `translateX(${currentX}px)`;

let isDragging = false;
let startX = 0;
let prevX = 0;

function startDrag(e) {
    isDragging = true;
    startX = e.clientX || e.touches[0].clientX;
    prevX = currentX;
    e.preventDefault();
}

function duringDrag(e) {
    if (!isDragging) return;
    e.preventDefault();

    const x = e.clientX || e.touches[0].clientX;
    const dx = x - startX;
    currentX = prevX + dx;

    if (currentX > 0) {
        currentX = -originalSlideSetWidth;
    } else if (currentX < -2 * originalSlideSetWidth) {
        currentX = -originalSlideSetWidth;
    }

    sliderTrack.style.transform = `translateX(${currentX}px)`;
}

function stopDrag() {
    isDragging = false;
}

sliderTrack.addEventListener("mousedown", startDrag);
window.addEventListener("mousemove", duringDrag);
window.addEventListener("mouseup", stopDrag);

sliderTrack.addEventListener("touchstart", startDrag);
sliderTrack.addEventListener("touchmove", duringDrag);
sliderTrack.addEventListener("touchend", stopDrag);
