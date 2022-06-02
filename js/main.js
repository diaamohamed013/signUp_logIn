var userNameInp = document.querySelector(`input[type = 'text']`);
var passwordInp = document.querySelector(`input[type = 'password']`);
var mailInp = document.querySelector(`input[type = 'email']`);
var loginEmail = document.getElementById("loginEmail");
var loginPassword = document.getElementById("loginPassword");
var signUpBtn = document.getElementById("signUpBtn");
var validData = document.getElementById("validData");
var validMail = document.getElementById("validMail");
var invalidData = document.getElementById("invalid");
var logInBtn = document.getElementById("logInBtn");
var UserNameView = document.getElementById("UserNameView");

var userDataContainer;
var welcomeUser = ``;

if (localStorage.getItem("userData") == null) {
    userDataContainer = [];
}
else {
    userDataContainer = JSON.parse(localStorage.getItem("userData"))
}


function userMailExist() {
    for (var i = 0; i < userDataContainer.length; i++) {
        if (userDataContainer[i].userMail.toLowerCase() == mailInp.value.toLowerCase()) {
            return false;
        }
    }
}

function signUp() {
    if (validateUSerName() && validateUSerMail() && validateUSerPass()) {
        var user = {
            userName: userNameInp.value,
            userPassword: passwordInp.value,
            userMail: mailInp.value
        };
        if (userMailExist() == false) {
            validMail.classList.replace("d-none", "d-block");
        }
        else {
            userDataContainer.push(user);
            localStorage.setItem("userData", JSON.stringify(userDataContainer));
            validMail.classList.add("d-none");
            clearForm();
        }
    }
}

// signUpBtn.addEventListener("click", function () {
//     signUp();
// });

function logIn() {
    if (validateUSerMail() && validateUSerPass()) {
        var email = loginEmail.value;
        var pass = loginPassword.value;
        for (var i = 0; i < userDataContainer.length; i++) {
            if (userDataContainer[i].userMail.toLowerCase() == email.toLowerCase() && userDataContainer[i].userPassword == pass) {
                // validData.classList.add("d-none");
                localStorage.setItem("Username", userDataContainer[i].userName);
                location.href = `welcomePage.html`;
            }
            else {
                validData.classList.add("d-block");
            }

        }

    }
}

// logInBtn.addEventListener("click" , logIn);

function validateUSerName() {
    var regx = /^\w{3,29}$/
    if (regx.test(userNameInp.value)) {
        validData.classList.add("d-none");
        return true;
    }
    else {
        validData.classList.replace("d-none", "d-block");
        return false;
    }
};

function validateUSerMail() {
    var regx = /^\w{3,29}$/
    if (regx.test(mailInp.value)) {
        validData.classList.add("d-none");
        return true;
    }
    else {
        validData.classList.replace("d-none", "d-block");
        return false;
    }
};

function validateUSerPass() {
    var regx = /^\d{4,8}$/
    if (regx.test(passwordInp.value)) {
        validData.classList.add("d-none");
        return true;
    }
    else {
        validData.classList.replace("d-none", "d-block");
        return false;
    }
};

function clearForm() {
    userNameInp.value = "";
    mailInp.value = "";
    passwordInp.value = "";
};
function logOut() {
    localStorage.removeItem("Username")
};


