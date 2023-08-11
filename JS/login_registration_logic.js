document.addEventListener("DOMContentLoaded", () => {
    const formLoginRegistration = document.getElementById(
        "form_login_registration"
    );

    // getting the text on top for toggling betwen 'login' and 'registration'
        const loginRegistrationFormTitle = document.querySelector(".card-title-email");

    // getting labels/inputs
    const labelName = document.getElementById("home_contact_name_label");
    const inputName = document.getElementById("home_contact_name");
    const labelLastName = document.getElementById(
        "home_contact_last_name_label"
    );
    const inputLastName = document.getElementById("home_contact_last_name");
    const labelDate = document.getElementById("home_contact_date_label");
    const inputDate = document.getElementById("home_contact_date");
    const labelEmail = document.getElementById("home_contact_email_label");
    const inputEmail = document.getElementById("home_contact_email");
    const labelPassword1 = document.getElementById(
        "home_contact_password1_label"
    );
    const inputPassword1 = document.getElementById("home_contact_password1");
    const labelPassword2 = document.getElementById(
        "home_contact_password2_label"
    );
    const inputPassword2 = document.getElementById("home_contact_password2");

    // getting input that act as buttons
    const toggleLoginRegistration = document.getElementById(
        "home_contact_form_toggle"
    );

    // setting isLoginMode = true
    let isLoginMode = true;
    console.log("the isLoginMode: " + isLoginMode);

    toggleLoginRegistration.addEventListener("click", () => {
        isLoginMode = !isLoginMode;
        console.log("the isLoginMode after toggling: " + isLoginMode);
        window.scrollTo({
            top: 0,
            behavior: "auto" // This adds a smooth scrolling effect
        });

        const elementsToAnimate = [
            labelName, inputName, labelLastName, inputLastName,
            labelDate, inputDate, labelEmail, inputEmail,
            labelPassword1, inputPassword1, labelPassword2, inputPassword2
        ];
        elementsToAnimate.forEach(element => {
            element.style.animation = "none"; // Remove animation
            element.offsetHeight; // Trigger reflow
            element.style.animation = null; // Reset animation
        });
    

        if (isLoginMode) {
            console.log("isLoginMode = true " + isLoginMode);

            // showing 'login' inthe innerHTML of the form title
            loginRegistrationFormTitle.innerHTML = "Login!";

            // hiding the labe+input for Name
            labelName.style.display = "none";
            inputName.style.display = "none";

            // hiding the label+input for LastName
            labelLastName.style.display = "none";
            inputLastName.style.display = "none";

            // hiding the label+input for date
            labelDate.style.display = "none";
            inputDate.style.display = "none";

            //hiding the label+input for password2
            labelPassword2.style.display = "none";
            inputPassword2.style.display = "none";


        } else {
            console.log("isLoginMode = false " + isLoginMode);

            // showing 'registration' in the innerHTML of the form title
            loginRegistrationFormTitle.innerHTML = "Registration!";
            // showing the labe+input for Name
            labelName.style.display = "block";
            inputName.style.display = "block";
            

            // showing the label+input for LastName
            labelLastName.style.display = "block";
            inputLastName.style.display = "block";

            // showing the label+input for date
            labelDate.style.display = "block";
            inputDate.style.display = "block";  

            // showing the label+input for password2
            labelPassword2.style.display = "block";
            inputPassword2.style.display = "block";
        }
    });
});
