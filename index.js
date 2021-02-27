window.onload = dataManager.loadData();

checkAuthentication();

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

// function passwordEye() {
//     let eyeShow = document.getElementsByClassName("fa-eye");
//     let eyeHide = document.getElementsByClassName("fa-eye-slash");
//     eyeShow.onclick = function () {
//         document.getElementById("")
//     }
// }