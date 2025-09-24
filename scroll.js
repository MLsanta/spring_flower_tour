let texts = document.getElementById("texts");
let banner = document.querySelector(".banner");
function startScroll() {
    let sy = window.scrollY;

    if (sy > 300) {
        texts.classList.add("active");
    } else {
        texts.classList.remove("active");
    }
    if (sy > 500) {
        banner.classList.add("on");
    } else {
        banner.classList.remove("on");
    }
}
startScroll();
window.addEventListener("scroll", startScroll);
