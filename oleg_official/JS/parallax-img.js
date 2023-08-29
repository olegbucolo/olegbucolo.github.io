// Parallax scrolling function
function parallaxScroll(element, initialBottom, factor) {
    const adjustedBottom = initialBottom + window.scrollY * factor + "px";
    element.style.setProperty("bottom", adjustedBottom);
}

// Elements
const img01 = document.querySelector(".img01");
const img02 = document.querySelector(".img02");

// Initial values
const img01BottomParsed = removePx(
    window.getComputedStyle(img01).getPropertyValue("bottom")
);

const img02BottomParsed = removePx(
    window.getComputedStyle(img02).getPropertyValue("bottom")
);

// Scroll event handler
function handleScroll() {
    parallaxScroll(img01, img01BottomParsed, -0.8);
    parallaxScroll(img02, img02BottomParsed, -1.05);
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

// Helper function to remove "px" from a value
function removePx(valueWithPx) {
    return parseFloat(valueWithPx);
}
