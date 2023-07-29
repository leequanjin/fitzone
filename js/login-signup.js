const forms = document.querySelector(".forms")
const pwShowHide = document.querySelectorAll(".eye-icon")
const links = document.querySelectorAll(".link");

var loginModal = document.getElementById("login-modal");
var signupModal = document.getElementById("sign-up-modal");
var openLoginModal = document.getElementById("open-login-modal");
var openSignupModal = document.getElementById("open-sign-up-modal");

// hide and show password
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

// login modal
openLoginModal.onclick = function () {
    loginModal.style.display = "block";
}

// signup modal
openSignupModal.onclick = function () {
    signupModal.style.display = "block";
}

function delay(URL) {
    setTimeout(function () { window.location = URL }, 2000);
}