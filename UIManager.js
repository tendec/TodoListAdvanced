const UIManager = {
    updateUI: function () {
        const loginElement = document.getElementById("login");
        const registerElement = document.getElementById("register");
        const mainElement = document.getElementById("main");

        const currentUI = dataManager.state.currentUI;

        loginElement.style.display = currentUI === UI.LOGIN ? "inline" : "none";
        registerElement.style.display = currentUI === UI.REGISTER ? "inline" : "none";
        mainElement.style.display = currentUI === UI.MAIN ? "inline" : "none";
    },
    goto: function (name) {
        dataManager.state.currentUI = name;
        this.updateUI();
        if (name == UI.MAIN) {
            cardManager.render();
        }
    }
}