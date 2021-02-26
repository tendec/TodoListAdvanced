const UI = {
    "LOGIN": "login",
    "REGISTER": "register",
    "MAIN": "main"
}
const dataManager = {
    state: {
        users: [],
        currentUser: null,
        currentUI: "login",
    },
    loadData: function () {
        const str = localStorage.getItem("masterData");
        this.state = JSON.parse(str);
    },
    saveData: function () {
        localStorage.setItem("masterData", JSON.stringify(this.state));
    },
    addUser: function (username, password) {
        let user = new User(username, password);
        this.state.users.push(user);
        this.saveData();
        return user;
    },
    setCurrentUser: function (user) {
        this.state.currentUser = user;
    }
}
class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
}