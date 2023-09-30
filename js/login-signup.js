const forms = document.querySelector(".forms")
const pwShowHide = document.querySelectorAll(".eye-icon")
const links = document.querySelectorAll(".link");

var loginModal = document.getElementById("login-modal");
var signupModal = document.getElementById("sign-up-modal");
var openLoginModal = document.getElementById("open-login-modal");
var openSignupModal = document.getElementById("open-sign-up-modal");


console.log(forms, pwShowHide, links)

// switch eye icon,and hide/ show password
pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");

        pwFields.forEach(password => {
            if (password.type == "password") {
                password.type = "text";
                return;
            }
            password.type = "password";
        })
    })
})

// switch between login and signup forms
links.forEach(link => {
    link.onclick = function () {
        forms.classList.toggle("show-sign-up");
    }
})

// show login modal
openLoginModal.onclick = function () {
    var loginEmail = document.getElementById("login-email").value;
    var loginPassword = document.getElementById("login-password").value;
    if (loginEmail === "admin@gmail.com" && loginPassword === "admin123") {
        loginModal.style.display = "block";
        setTimeout(function() {
            window.location.href = '/html/index.html';
        }, 2000);
    }
    else {
        alert("Your Email/UserID or Password is incorrect!");
        return;
    }
}

// show signup modal
openSignupModal.onclick = function () {
    var signupEmail = document.getElementById("signup-email").value;
    var signupPassword = document.getElementById("signup-password").value;
    var confirmPassword = document.getElementById("confirm-password").value;
    if (signupEmail.length < 8) {
        alert("Email/Username must be at least 8 characters.")
        return;
    }

    else if (signupPassword.length < 8) {
        alert("Password must be at least 8 characters.")
        return;
    }
    
    else if (signupPassword === confirmPassword) {
        signupModal.style.display = "block";
        setTimeout(function() {
            window.location.href = '/html/index.html';
        }, 2000);
    }
    
    else {
        alert("Password and confirm password do not match!");
        return;
    }
}

