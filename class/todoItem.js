class TodoItem {

    constructor(content, color) {
        this.content = content;
        this.color = color;
        this.element = null;
        this.code = Date.now();
    }

    generateHTMLElement() {
        let li = document.createElement("li");

        let tick1 = document.createElement("i");
        tick1.classList.add("tickTodo", "far", "fa-check-square", "fa-lg");

        let tick2 = document.createElement("i");
        tick2.classList.add("tickTodoDone", "fas", "fa-check-square", "fa-lg");
        tick2.setAttribute("onclick", "deleteTodoItem(this)");

        let span = document.createElement("span");
        span.classList.add("todoItems");
        span.innerText = this.content;
        span.style.color = this.color;

        let highBtn = document.createElement("button");
        highBtn.classList.add("btnPriority", "highBtn");
        highBtn.setAttribute("onclick", "setPriority(this)");

        let mediumBtn = document.createElement("button");
        mediumBtn.classList.add("btnPriority", "mediumBtn");
        mediumBtn.setAttribute("onclick", "setPriority(this)");

        let lowBtn = document.createElement("button");
        lowBtn.classList.add("btnPriority", "lowBtn");
        lowBtn.setAttribute("onclick", "setPriority(this)");

        li.appendChild(tick1);
        li.appendChild(tick2);
        li.appendChild(span);
        li.appendChild(highBtn);
        li.appendChild(mediumBtn);
        li.appendChild(lowBtn);

        this.element = li;
        return li;
    }
}