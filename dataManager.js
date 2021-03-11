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
        focusElementCode1: null,
    },

    loadData: function () {
        const str = localStorage.getItem("masterData");
        if (str != null) {
            data = JSON.parse(str);
            let currentUserData = data.currentUser;
            for (let i = 0; i < data.users.length; i++) {
                let userData = data.users[i];
                let user = new User(userData.username, userData.password, userData.cards);
                this.state.users.push(user);
                if (currentUserData != null) {
                    if (user.isUser(currentUserData.username, currentUserData.password)) {
                        this.state.currentUser = user;
                    }
                }
            }
        }
    },

    saveData: function () {
        localStorage.setItem("masterData", JSON.stringify(this.state));
    },

    addUser: function (username, password, card) {
        let user = new User(username, password, card);
        this.state.users.push(user);
        this.saveData();
        return user;
    },

    setCurrentUser: function (user) {
        this.state.currentUser = user;
    },

    addCard: function (title, array) {
        let card = new Card(title, array);
        this.state.currentUser.addCard(card);
        this.saveData();
        return card;
    },
}