class Card {

    constructor(title, array) {
        this.title = title;
        this.todos = array;
        this.element = null;
    }

    generateHTMLElement() {
        let card = document.createElement("div");
        card.classList.add("card");

        let title = document.createElement("input");
        title.classList.add("card-title");
        title.setAttribute("type", "text");
        title.setAttribute("placeholder", "Title Card");
        title.setAttribute("onblur", "unfocusField(this)");
        title.value = this.title;

        let todoList = document.createElement("ul");
        for (let i = 0; i < this.todos.length; i++) {
            let data = this.todos[i];
            let todoItem = new TodoItem (data.content, data.color);
            todoList.appendChild(todoItem.generateHTMLElement());
        }

        let input = document.createElement("input");
        input.classList.add("todoField");
        input.setAttribute("type", "text");
        input.setAttribute("placeholder", "Todo item...");

        card.appendChild(title);
        card.appendChild(todoList);
        card.appendChild(input);

        this.element = card;
        return card;
    }
}