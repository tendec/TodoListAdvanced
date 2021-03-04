const cardManager = {
    elementContainer: null,
    render: function () {
        this.elementContainer.innerHTML = "";
        let cards = dataManager.state.currentUser.cards;
        for (let i = 0; i < cards.length; i++) {
            this.elementContainer.appendChild(cards[i].generateHTMLElement());
        }
    },
    setContainer: function (element) {
        this.elementContainer = element;
    },
    addNewCard: function () {
        this.addCard("New Card", []);
    },
    addCard: function (title, todos) {
        dataManager.addCard(title, todos);
        this.render();
    }
}