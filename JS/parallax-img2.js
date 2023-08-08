// Parallas scrolling function
function parallaxScroll(element, initialBottom, factor) {
    const adjustedBottom = initialBottom + window.scrollY * factor + "px";
    element.style.setProperty("bottom", adjustedBottom);
}

// Elements
const img06 = document.querySelector(".img06");
const img07 = document.querySelector(".img07");

// Initial values
const img06BottomParsed = removePx(
    window.getComputedStyle(img06).getPropertyValue("bottom")
);

const img07BottomParsed = removePx(
    window.getComputedStyle(img07).getPropertyValue("bottom")
);

// Scroll event handler
function handleScroll() {
    parallaxScroll(img06, img06BottomParsed, -0.8);
    parallaxScroll(img07, img07BottomParsed, -1.05);
}

// Debounced scroll event listener 
let isScrolling = false;
window.addEventListener("scroll", () => {
    if (!isScrolling) {
        isScrolling = true;
        requestAnimationFrame(() => {
            handleScroll();
            isScrolling = false;
        });
    }
});

// Helper function to remore "px" from value
function removePx(withPx) {
    return parseFloat(withPx);
}
