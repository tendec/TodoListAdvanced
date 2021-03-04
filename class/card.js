class Card {

    constructor(title, array) {
        this.title = title;
        this.todos = array;
        this.element = null;
        this.code = Date.now();
    }

    generateHTMLElement() {
        let card = document.createElement("div");
        card.classList.add("card");

        let title = document.createElement("input");
        title.classList.add("card-title");
        title.setAttribute("type", "text");
        title.setAttribute("placeholder", "Title Card");
        title.setAttribute("onblur", "unfocusField(this)");
        title.setAttribute("onchange", "updateDataTitle(this)");
        title.setAttribute("code", this.code);
        title.value = this.title;

        let todoList = document.createElement("ul");
        todoList.classList.add("todoList");
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

        let tick = document.createElement("input");
        tick.classList.add("deleteCard");
        tick.setAttribute("type", "checkbox");
        tick.setAttribute("onclick", "deleteCard(this)");

        card.appendChild(title);
        card.appendChild(todoList);
        card.appendChild(input);
        card.appendChild(tick);

        this.element = card;
        return card;
    }
}