class TodoItem {

    constructor(content, color) {
        this.content = content;
        this.color = color;
        this.element = null;
        // this.code = Date.now();
    }

    generateHTMLElement() {
        let li = document.createElement("li");

        let check = document.createElement("i");
        check.classList.add("checkTodo", "fas", "fa-check", "fa-xm");
        check.setAttribute("onclick", "deleteTodoItem(this)");

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

        li.appendChild(check);
        li.appendChild(span);
        li.appendChild(highBtn);
        li.appendChild(mediumBtn);
        li.appendChild(lowBtn);

        this.element = li;
        return li;
    }
}