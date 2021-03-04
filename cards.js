let btnAddNewCardItem = document.getElementById("btn-addCard");
btnAddNewCardItem.addEventListener("click", function () {
    let cardTitle = document.getElementsByClassName("card-title");
    let cardTitleContent = [];
    for (let i = 0; i < cardTitle.length; i++) {
        cardTitleContent.push(cardTitle[i].value);
    }
    if (cardTitleContent.includes("")) {
        alert("New card existed!");
    } else {
        cardManager.addNewCard();
    }
});

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
            // colorStorageArr[i] = "red";
            saveData();
        }
    };
    for (let j = 0; j < yellow.length; j++) {
        yellow[j].onclick = function () {
            if (yellow[j].parentNode.children[1].classList.contains("redIsHigh") || yellow[j].parentNode.children[1].classList.contains("greenIsLow")) {
                yellow[j].parentNode.children[1].classList.remove("redIsHigh", "greenIsLow");
            };
            yellow[j].parentNode.children[1].classList.add("yellowIsMedium");
            // colorStorageArr[j] = "yellow";
            saveData();
        }
    }
    for (let o = 0; o < green.length; o++) {
        green[o].onclick = function () {
            if (green[o].parentNode.children[1].classList.contains("yellowIsMedium") || green[o].parentNode.children[1].classList.contains("redIsHigh")) {
                green[o].parentNode.children[1].classList.remove("yellowIsMedium", "redIsHigh");
            };
            green[o].parentNode.children[1].classList.add("greenIsLow");
            // colorStorageArr[o] = "green";
            saveData();
        }
    }
}

/* let todoStorageArr = [];
let colorStorageArr = [];
let cardStorageArr = []; */

/* function () {
    let inputElement = document.getElementById("addTodo-field0");
    if (todoStorageArr.length == 5) {
        alert("Please complete the others first!");
        inputElement.value = "";
    } else {
        if (inputElement.value == "") {
            alert("Please type a todo!");
        } else if (todoStorageArr.includes(inputElement.value)) {
            alert("The todo existed!");
            inputElement.value = "";
        } else {
            createTodoItem(inputElement.value);
            todoStorageArr.push(inputElement.value);
            colorStorageArr.push("black");
            saveData();
            inputElement.value = "";
            setPriority();
        }
    }
}); */


/* let add = document.getElementById("addTodo-field0");
add.addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        event.preventDefault();
        let inputElement = document.getElementById("addTodo-field0");
        if (todoStorageArr.length == 5) {
            alert("Please complete the others first!");
            inputElement.value = "";
        } else {
            if (inputElement.value == "") {
                alert("Please type a todo!");
            } else if (todoStorageArr.includes(inputElement.value)) {
                alert("The todo existed!");
                inputElement.value = "";
            } else {
                createTodoItem(inputElement.value);
                todoStorageArr.push(inputElement.value);
                colorStorageArr.push("black");
                saveData();
                inputElement.value = "";
                setPriority();
            }
        }
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
} */

/* function saveData() {
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
} */