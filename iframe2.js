const sliderTrack = document.querySelector(".container");

const images = ["철쭉제1.jpg", "철쭉제2.jpg", "철쭉제3.jpg", "철쭉제4.jpg"];

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
let autoScrollInterval;

function startAutoScroll() {
    stopAutoScroll();

    autoScrollInterval = setInterval(() => {
        if (!isDragging) {
            currentX -= 1;
            if (currentX < -2 * originalSlideSetWidth) {
                currentX = -originalSlideSetWidth;
            }
            sliderTrack.style.transform = `translateX(${currentX}px)`;
        }
    }, 16);
}

function stopAutoScroll() {
    clearInterval(autoScrollInterval);
}

function getX(e) {
    return e.touches ? e.touches[0].clientX : e.clientX;
}

function startDrag(e) {
    isDragging = true;
    startX = getX(e);
    prevX = currentX;
    stopAutoScroll();
    e.preventDefault();
}

function duringDrag(e) {
    if (!isDragging) return;
    e.preventDefault();

    const x = getX(e);
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
    startAutoScroll();
}

sliderTrack.addEventListener("mousedown", startDrag);
sliderTrack.addEventListener("mousemove", duringDrag);
sliderTrack.addEventListener("mouseup", stopDrag);

sliderTrack.addEventListener("touchstart", startDrag);
sliderTrack.addEventListener("touchmove", duringDrag);
sliderTrack.addEventListener("touchend", stopDrag);

startAutoScroll();
