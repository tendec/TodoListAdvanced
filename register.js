setOnClickEventsOnRegisterPage();

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
        if (confirmPassword.value !== password.value) {
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
            user = dataManager.addUser(userName.value, confirmPassword.value, []);
            dataManager.setCurrentUser(user);
            dataManager.saveData();
            userName.value = "";
            password.value = "";
            confirmPassword.value = "";
            UIManager.goto(UI.MAIN);
            setInfoCurrentUser();
        }
    }
    userName.addEventListener("keyup", function (event) {
        if (event.key == "Enter") {
            event.preventDefault();
            submitBtn.click();
        }
    })
    userName.addEventListener("input", function () {
        userName.classList.remove("invalid");
        password.classList.remove("invalid");
        confirmPassword.classList.remove("invalid");
    })
    password.addEventListener("keyup", function (event) {
        if (event.key == "Enter") {
            event.preventDefault();
            submitBtn.click();
        }
    })
    password.addEventListener("input", function () {
        userName.classList.remove("invalid");
        password.classList.remove("invalid");
        confirmPassword.classList.remove("invalid");
    })
    password.addEventListener("paste", function (event) {
        event.preventDefault();
        alert("Type password!");
    })
    confirmPassword.addEventListener("keyup", function (event) {
        if (event.key == "Enter") {
            event.preventDefault();
            submitBtn.click();
        }
    })
    confirmPassword.addEventListener("input", function () {
        userName.classList.remove("invalid");
        password.classList.remove("invalid");
        confirmPassword.classList.remove("invalid");
    })
    confirmPassword.addEventListener("paste", function (event) {
        event.preventDefault();
        alert("Type password!");
    })
}