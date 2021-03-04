setOnClickEventsOnMainPage();

function setOnClickEventsOnMainPage() {
    let logoutBtn = document.getElementById("btn-logout");
    logoutBtn.onclick = function () {
        UIManager.goto(UI.LOGIN);
        dataManager.setCurrentUser(null);
        dataManager.saveData();
    }
    let deleteAllBtn = document.getElementById("btn-deleteAll");
    deleteAllBtn.onclick = function () {
        if (confirm("Confirm delete all cards?")) {
            cardManager.elementContainer.innerHTML = "";
            dataManager.state.currentUser.cards = [];
            dataManager.saveData();
        }
    }
}

function deleteCard(element) {
    if (confirm("Confirm delete this card?")) {
        element.parentNode.innerHTML = "";
    }
}