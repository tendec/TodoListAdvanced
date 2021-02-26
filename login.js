setOnClickEventsOnLoginPage();
setOnClickEventsOnRegisterPage();
setOnClickEventsOnMainPage();

function setOnClickEventsOnLoginPage() {
    let loginBtn = document.getElementById("btn-login");
    let registerBtn = document.getElementById("btn-register");
    loginBtn.onclick = function () {
        
    }
    registerBtn.onclick = function () {
        UIManager.goto(UI.REGISTER);
    }
}

function setOnClickEventsOnRegisterPage() {
    let backBtn = document.getElementById("btn-back-register");
    let submitBtn = document.getElementById("btn-submit-register");
    backBtn.onclick = function () {
        UIManager.goto(UI.LOGIN);
    }
    submitBtn.onclick = function () {
        let userName = document.getElementById("username-register");
        let password = document.getElementById("password-register");
        let confirmPassword = document.getElementById("cfpassword-register");
        if (confirmPassword.value != password.value) {
            confirmPassword.classList.add("invalid");
            alert("Password does not match");
        } else if (userName.value == "" || password.value == "") {
            userName.classList.add("invalid");
            password.classList.add("invalid");
            confirmPassword.classList.add("invalid");
            alert("Type info!");
        } else {
            userName.classList.remove("invalid");
            password.classList.remove("invalid");
            confirmPassword.classList.remove("invalid");
            user = dataManager.addUser(userName.value, confirmPassword.value);
            dataManager.setCurrentUser(user);
            userName.value = "";
            password.value = "";
            confirmPassword.value = "";
            UIManager.goto(UI.MAIN);
        }
    }
}

function setOnClickEventsOnMainPage() {
    let logoutBtn = document.getElementById("btn-logout");
    logoutBtn.onclick = function () {
        UIManager.goto(UI.LOGIN);
    }
}