cardManager.elementContainer = document.getElementById("cards");
dataManager.loadData();

checkAuthentication();
passwordEye();


function checkAuthentication() {
    if (authenticationManager.checkAuthentication() == false) {
        UIManager.goto(UI.LOGIN);
    } else {
        UIManager.goto(UI.MAIN);
    }
}

function checkUserNameExisted() {
    let userNames = dataManager.state.users.map(function (User) {
        return User.username;
    });
    let userName = document.getElementById("username-register");
    if (userNames.includes(userName.value)) {
        userName.classList.add("invalid");
        alert("UserName existed!");
    } else {
        userName.classList.remove("invalid");
    }
}

function passwordEye() {
    let eyeLogin = document.getElementById("eye-login");
    eyeLogin.onclick = function () {
        let type = document.getElementById("password-login").getAttribute("type") === "password" ? "text" : "password";
        document.getElementById("password-login").setAttribute("type", type);
        this.classList.toggle("fa-eye-slash");
    }
    let eyeRegisterp = document.getElementById("eyeP-register");
    let eyeRegistercfp = document.getElementById("eyeCfP-register");
    eyeRegisterp.onclick = function () {
        let typep = document.getElementById("password-register").getAttribute("type") === "password" ? "text" : "password";
        let typecfp = document.getElementById("cfpassword-register").getAttribute("type") === "password" ? "text" : "password";
        document.getElementById("password-register").setAttribute("type", typep);
        document.getElementById("cfpassword-register").setAttribute("type", typecfp);
        eyeRegisterp.classList.toggle("fa-eye-slash");
        eyeRegistercfp.classList.toggle("fa-eye-slash");
    }
}

function unfocusField(element) {
    if (element.value !== "") {
        element.style.border = "none";
        element.style.background = "rgb(221, 221, 221)";
    }
}

function updateDataTitle(element) {
    let cards = dataManager.state.currentUser.cards;
    let titleContent = element.value;
    for (let i = 0; i < cards.length; i++) {
        if (cards[i].code == element.getAttribute("code")) {
            cards[i].title = titleContent;
            dataManager.saveData();
        }
    }
}

function updateDataTodo(element) {
    let cards = dataManager.state.currentUser.cards;
    let todoContent = element.value;
    for (let i = 0; i < cards.length; i++) {
        if (cards[i].code == element.getAttribute("code")) {
            cards[i].todos.push(todoContent);
            dataManager.saveData();
            cardManager.render();
        }
    }
}