class Card {

    constructor(title, array) {
        this.title = title;
        this.todos = array;
        this.element = null;
        this.code = Math.random();
    }

    generateHTMLElement() {
        let card = document.createElement("div");
        card.classList.add("card");

        let title = document.createElement("input");
        title.classList.add("card-title");
        title.setAttribute("type", "text");
        title.setAttribute("placeholder", "Title Card");
        title.setAttribute("onchange", "updateDataTitle(this)");
        title.setAttribute("code", this.code);
        title.value = this.title;

        let todoList = document.createElement("ul");
        todoList.classList.add("todoList");
        todoList.setAttribute("code", this.code);
        for (let i = 0; i < this.todos.length; i++) {
            let data = this.todos[i];
            let todoItem = new TodoItem(data.content, data.color);
            todoList.appendChild(todoItem.generateHTMLElement());
        }

        let input = document.createElement("input");
        input.classList.add("todoField");
        input.setAttribute("type", "text");
        input.setAttribute("placeholder", "Todo item...");
        input.setAttribute("onchange", "updateDataTodo(this)");
        input.setAttribute("code", this.code);

        let check = document.createElement("i");
        check.classList.add("deleteCard", "fas", "fa-check", "fa-xm");
        check.setAttribute("onclick", "deleteCard(this)");
        
        card.appendChild(title);
        card.appendChild(todoList);
        card.appendChild(input);
        card.appendChild(check);

        this.element = card;
        return card;
    }
}