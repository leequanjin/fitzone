const forms = document.querySelector(".forms")
const pwShowHide = document.querySelectorAll(".eye-icon")
const links = document.querySelectorAll(".link");

console.log(forms, pwShowHide, links)

pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");

        pwFields.forEach(password => {
            if (password.type == "password") {
                password.type = "text";
                eyeIcon.classList.replace("fa-eye-slash", "fa-eye");
                return;
            }

            password.type = "password";
            eyeIcon.classList.replace("fa-eye", "fa-eye-slash");
        })
    })
})

links.forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault(); //prevent form submit
        forms.classList.toggle("show-sign-up");
    })
})