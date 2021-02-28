let btnAddTodoItem = document.getElementById("btn-addTodo");
btnAddTodoItem.onclick = function () {
    let inputElement = document.getElementById("addTodo-field");
    if (inputElement.value == "") {
        alert("Please type a todo!");
    } else {
        createTodoItem(inputElement.value);
        /* todoStorageArr.push(inputElement.value);
        colorStorageArr.push("black");
        saveData(); */
        inputElement.value = "";
    }
}

function createTodoItem(value) {
    document.getElementById("card-todos").innerHTML +=
        "<li><i class='fas fa-check' onclick='onCheckboxClick(this)'></i>" +
        "<span class='todoItems'>" + value + "</span>" + "</li>";
}