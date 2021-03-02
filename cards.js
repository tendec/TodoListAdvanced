let todoStorageArr = [];
let colorStorageArr = [];

let btnAddTodoItem = document.getElementById("btn-addTodo0");
btnAddTodoItem.addEventListener("click", function () {
    let inputElement = document.getElementById("addTodo-field0");
    if (todoStorageArr.length == 5) {
        alert("Please complete the others first!");
        inputElement.value = "";
    } else {
        if (inputElement.value == "") {
            alert("Please type a todo!");
        } else {
            createTodoItem(inputElement.value);
            todoStorageArr.push(inputElement.value);
            colorStorageArr.push("black");
            saveData();
            inputElement.value = "";
            setPriority();
        }
    }
});

let btnAddCardItem = document.getElementById("btn-addCard");
btnAddCardItem.addEventListener("click", function () {
    let clickedCount = 2;
    let i = 1;
    while (i < clickedCount) {
        let newDivCard = document.createElement("div");
        newDivCard.classList.add("card");
        newDivCard.setAttribute("id", "card" + i);
        let newInputTitle = document.createElement("input");
        newInputTitle.classList.add("card-title");
        newInputTitle.setAttribute("type", "text");
        newInputTitle.setAttribute("id", "card-title" + i);
        newInputTitle.setAttribute("placeholder", "Title Card");
        newInputTitle.setAttribute("onblur", "unfocusField(this)");
        let newUl = document.createElement("ul");
        newUl.setAttribute("id", "card-todos" + i);
        let newDivField = document.createElement("div");
        newDivField.classList.add("fieldAddTodo");
        newDivField.setAttribute("id", "fieldAddTodo" + i);
        let newInputField = document.createElement("input");
        newInputField.classList.add("todoField");
        newInputField.setAttribute("type", "text");
        newInputField.setAttribute("id", "addTodo-field" + i);
        newInputField.setAttribute("placeholder", "Todo item");
        let newBtn = document.createElement("button");
        newBtn.classList.add("btnAdd");
        newBtn.setAttribute("id", "btn-addTodo" + i);
        let newPlus = document.createElement("i");
        newPlus.classList.add("fas", "fa-plus");
        document.getElementById("cards").appendChild(newDivCard);
        document.getElementById("card" + i).appendChild(newInputTitle);
        document.getElementById("card" + i).appendChild(newUl);
        document.getElementById("card" + i).appendChild(newDivField);
        document.getElementById("fieldAddTodo" + i).appendChild(newInputField);
        document.getElementById("fieldAddTodo" + i).appendChild(newBtn);
        document.getElementById("btn-addTodo" + i).appendChild(newPlus);
        break;
    }
    clickedCount++;
    i++;
});

let sub = document.getElementById("addTodo-field0");
sub.addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        event.preventDefault();
        btnAddTodoItem.click();
    }
});

window.onload = function () {
    loadData();
    for (let i = 0; i < todoStorageArr.length; i++) {
        createTodoItem(todoStorageArr[i]);
        if (colorStorageArr[i] == "red") {
            red[i].parentNode.children[1].classList.add("redIsHigh");
        } else if (colorStorageArr[i] == "yellow") {
            yellow[i].parentNode.children[1].classList.add("yellowIsMedium");
        } else if (colorStorageArr[i] == "green") {
            green[i].parentNode.children[1].classList.add("greenIsLow");
        }
    }
    setPriority();
}

function createTodoItem(value) {
    document.getElementById("card-todos0").innerHTML +=
        `<li>
            <i class='fas fa-check' onclick='onCheckboxClick(this)'></i> 
            <span class='todoItems'>` + value + `</span>
            <button class='btnPriority highBtn'>High</button>
            <button class='btnPriority mediumBtn'>Medium</button>
            <button class='btnPriority lowBtn'>Low</button>
        </li>`
}

let green = document.getElementsByClassName("lowBtn");
let yellow = document.getElementsByClassName("mediumBtn");
let red = document.getElementsByClassName("highBtn");
function setPriority() {
    for (let i = 0; i < red.length; i++) {
        red[i].onclick = function () {
            if (red[i].parentNode.children[1].classList.contains("yellowIsMedium") || red[i].parentNode.children[1].classList.contains("greenIsLow")) {
                red[i].parentNode.children[1].classList.remove("yellowIsMedium", "greenIsLow");
            };
            red[i].parentNode.children[1].classList.add("redIsHigh");
            colorStorageArr[i] = "red";
            saveData();
        }
    };
    for (let j = 0; j < yellow.length; j++) {
        yellow[j].onclick = function () {
            if (yellow[j].parentNode.children[1].classList.contains("redIsHigh") || yellow[j].parentNode.children[1].classList.contains("greenIsLow")) {
                yellow[j].parentNode.children[1].classList.remove("redIsHigh", "greenIsLow");
            };
            yellow[j].parentNode.children[1].classList.add("yellowIsMedium");
            colorStorageArr[j] = "yellow";
            saveData();
        }
    }
    for (let o = 0; o < green.length; o++) {
        green[o].onclick = function () {
            if (green[o].parentNode.children[1].classList.contains("yellowIsMedium") || green[o].parentNode.children[1].classList.contains("redIsHigh")) {
                green[o].parentNode.children[1].classList.remove("yellowIsMedium", "redIsHigh");
            };
            green[o].parentNode.children[1].classList.add("greenIsLow");
            colorStorageArr[o] = "green";
            saveData();
        }
    }
}

function onCheckboxClick(element) {
    const content = element.parentNode.querySelector(".todoItems").innerText;
    for (let i = 0; i < todoStorageArr.length; i++) {
        if (todoStorageArr[i] == content) {
            todoStorageArr.splice(i, 1);
            colorStorageArr.splice(i, 1);
            saveData();
        }
    }
    element.parentNode.classList.add("deleteLi");
    setTimeout(function () {
        deleteElement(element.parentNode);
    }, 300)
}

function deleteElement(element) {
    container = document.querySelector("#card-todos0");
    container.removeChild(element);
}

function saveData() {
    if (todoStorageArr.length == 0) {
        localStorage.removeItem("todoData");
        localStorage.removeItem("colorData");
    } else {
        localStorage.setItem("todoData", JSON.stringify(todoStorageArr));
        localStorage.setItem("colorData", JSON.stringify(colorStorageArr));
    }
}

function loadData() {
    const dataTodo = localStorage.getItem("todoData");
    const dataColor = localStorage.getItem("colorData");
    todoStorageArr = dataTodo == null ? [] : JSON.parse(dataTodo);
    colorStorageArr = dataColor == null ? [] : JSON.parse(dataColor);
}

function unfocusField(element) {
    if (element.value !== "") {
        element.style.border = "none";
        element.style.background = "rgb(221, 221, 221)";
    }
}