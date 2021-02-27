setOnClickEventsOnLoginPage();
setOnClickEventsOnRegisterPage();
setOnClickEventsOnMainPage();

function setOnClickEventsOnLoginPage() {
    let userName = document.getElementById("username-login");
    let password = document.getElementById("password-login");
    let loginBtn = document.getElementById("btn-login");
    let registerBtn = document.getElementById("btn-register");
    loginBtn.onclick = function () {
        let userNames = dataManager.state.users.map(function (User) {
            return User.username;
        });
        let passwords = dataManager.state.users.map(function (User) {
            return User.password;
        });
        if (userNames.includes(userName.value)) {
            if (passwords.includes(password.value)) {
                dataManager.setCurrentUser(dataManager.state.users[userNames.indexOf(userName.value)]);
                UIManager.goto(UI.MAIN);
                dataManager.saveData();
            } else {
                userName.classList.add("invalid");
                password.classList.add("invalid");
                alert("UserName or Password incorrect!");
            }
        } else {
            userName.classList.add("invalid");
            password.classList.add("invalid");
            alert("UserName or Password incorrect!");
        }
    }
    registerBtn.onclick = function () {
        UIManager.goto(UI.REGISTER);
    }
}

function setOnClickEventsOnRegisterPage() {
    let userName = document.getElementById("username-register");
    let password = document.getElementById("password-register");
    let confirmPassword = document.getElementById("cfpassword-register");
    let backBtn = document.getElementById("btn-back-register");
    let submitBtn = document.getElementById("btn-submit-register");
    backBtn.onclick = function () {
        UIManager.goto(UI.LOGIN);
        userName.classList.remove("invalid");
        password.classList.remove("invalid");
        confirmPassword.classList.remove("invalid");
        userName.value = "";
        password.value = "";
        confirmPassword.value = "";
    }
    submitBtn.onclick = function () {
        if (confirmPassword.value != password.value) {
            confirmPassword.classList.add("invalid");
            alert("Password not match");
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
        dataManager.setCurrentUser(null);
        dataManager.saveData();
    }
}