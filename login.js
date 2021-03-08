setOnClickEventsOnLoginPage();

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
                userName.value = "";
                password.value = "";
                userName.classList.remove("invalid");
                password.classList.remove("invalid");
                setInfoCurrentUser();
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
    userName.addEventListener("keyup", function (event) {
        if (event.key == "Enter") {
            event.preventDefault();
            loginBtn.click();
        }
    })
    password.addEventListener("keyup", function (event) {
        if (event.key == "Enter") {
            event.preventDefault();
            loginBtn.click();
        }
    })
    password.addEventListener("paste", function (event) {
        event.preventDefault();
        alert("Type password!");
    })
    registerBtn.onclick = function () {
        userName.value = "";
        password.value = "";
        userName.classList.remove("invalid");
        password.classList.remove("invalid");
        UIManager.goto(UI.REGISTER);
    }
}