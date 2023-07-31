const aElements = document.querySelectorAll(".head-a");

function addLiStylePressed(event) {
    const headLi = event.target.closest(".head-li");
    if (headLi) {
        headLi.classList.add("li-style-pressed");

        function removePressedClass() {
            headLi.classList.remove("li-style-pressed");
            // Remove the event listeners to avoid potential memory leaks
            document.removeEventListener("mouseup", removePressedClass);
            document.removeEventListener("mousemove", removePressedClass);
        }

        document.addEventListener("mouseup", removePressedClass);
        document.addEventListener("mousemove", removePressedClass);
    }
}

function addLiStylePressedTouch(event) {
    const headLi = event.target.closest(".head-li");
    if (headLi) {
        headLi.classList.add("li-style-pressed");

        function removePressedClass() {
            headLi.classList.remove("li-style-pressed");
            // Remove the event listeners to avoid potential memory leaks
            document.removeEventListener("touchend", removePressedClass);
            document.removeEventListener("touchmove", removePressedClass);
        }

        document.addEventListener("touchend", removePressedClass);
        document.addEventListener("touchmove", removePressedClass);
    }
}

aElements.forEach((aElement) => {
    // Add event listener for mouse click
    aElement.addEventListener("mousedown", addLiStylePressed);

    // Add event listener for touch start
    aElement.addEventListener("touchstart", addLiStylePressedTouch);
});
