class User {

    constructor(username, password, cards) {
        this.username = username;
        this.password = password;
        this.cards = [];
        if (cards !== undefined) {
            for (let i = 0; i < cards.length; i++) {
                let cardData = cards[i];
                let card = new Card(cardData.title, cardData.todos);
                this.cards.push(card);
            }
        }
    }

    addCard(card) {
        this.cards.push(card);
    }

    isUser(username, password) {
        if (username == this.username && password == this.password) {
            return true;
        } else {
            return false;
        }
    }
};