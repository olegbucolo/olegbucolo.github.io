const buttons = document.querySelectorAll(
    ".language-fr, .language-en, .language-it"
);

buttons.forEach((button) => {
    button.addEventListener("click", function (event) {
        const isCurrLang = event.target.classList.contains("language-selected");
        if (isCurrLang) {
            button.classList.remove("language-selected");
            event.preventDefault();
            buttons.forEach((button) => {
                button.classList.add("visible");
            });
        } else {
            const selectedLanguage = event.target;
            selectedLanguage.classList.add("language-selected");
            buttons.forEach((button) => {
                button.classList.remove("visible");
            });
            return;
        }
    });
});
