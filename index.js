window.onload = dataManager.loadData();

checkAuthentication();

function checkAuthentication() {
    if (authenticationManager.checkAuthentication() == false) {
        UIManager.goto(UI.LOGIN);
    } else {
        UIManager.goto(UI.MAIN);
    }
}

function checkUserName() {
    let userName = dataManager.state.users.map(function (User) {
        return User.username;
    });
    let valueUserName = document.getElementById("username-register");
    if (userName.includes(valueUserName.value)) {
        valueUserName.classList.add("invalid");
    } else {
        valueUserName.classList.remove("invalid");
    }
}

// function passwordEye() {
//     let eyeShow = document.getElementsByClassName("fa-eye");
//     let eyeHide = document.getElementsByClassName("fa-eye-slash");
//     eyeShow.onclick = function () {
//         document.getElementById("")
//     }
// }