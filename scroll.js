document.addEventListener("DOMContentLoaded", () => {
    let texts = document.getElementById("texts");
    let banner = document.querySelector(".banner");
    let scrolls = document.querySelector(".scrolls");

    function startScroll() {
        let sy = window.scrollY;
        console.log("scrollY:", sy);
        if (sy > 100) {
            texts.classList.add("active");
            scrolls.classList.add("off");
        } else {
            texts.classList.remove("active");
            scrolls.classList.remove("off");
        }
        if (sy > 440) {
            banner.classList.add("on");
        } else {
            banner.classList.remove("on");
        }
    }

    startScroll();
    window.addEventListener("scroll", startScroll);
});
