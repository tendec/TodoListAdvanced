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
    let cards = dataManager.state.currentUser.cards;
    let titleContent = element.parentNode.querySelector(".card-title").value;
    if (confirm("Confirm delete this card?")) {
        for (let i = 0; i < cards.length; i++) {
            if (cards[i].title == titleContent) {
                cards.splice(i, 1);
                let containerCards = document.querySelector("#cards");
                containerCards.removeChild(element.parentNode);
                dataManager.saveData();
            }
        }
    }
}