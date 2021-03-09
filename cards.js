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

function setPriority(element) {
    console.log("hi");
    let red = element.parentNode.parentNode.getElementsByClassName("highBtn");
    let yellow = element.parentNode.parentNode.getElementsByClassName("mediumBtn");
    let green = element.parentNode.parentNode.getElementsByClassName("lowBtn");
    for (let i = 0; i < red.length; i++) {
        red[i].onclick = function () {
            let spanRed = red[i].parentNode.children[2];
            if (spanRed.classList.contains("yellowIsMedium") || spanRed.classList.contains("greenIsLow")) {
                spanRed.classList.remove("yellowIsMedium", "greenIsLow");
            };
            spanRed.classList.add("redIsHigh");
            spanRed.removeAttribute("style");
            updateDataColor(spanRed, "rgb(247, 78, 78)");
        }
    };
    for (let j = 0; j < yellow.length; j++) {
        yellow[j].onclick = function () {
            let spanYellow = yellow[j].parentNode.children[2];
            if (spanYellow.classList.contains("redIsHigh") || spanYellow.classList.contains("greenIsLow")) {
                spanYellow.classList.remove("redIsHigh", "greenIsLow");
            };
            spanYellow.classList.add("yellowIsMedium");
            spanYellow.removeAttribute("style");
            updateDataColor(spanYellow, "rgb(255, 252, 60)");
        }
    }
    for (let o = 0; o < green.length; o++) {
        green[o].onclick = function () {
            let spanGreen = green[o].parentNode.children[2];
            if (spanGreen.classList.contains("yellowIsMedium") || spanGreen.classList.contains("redIsHigh")) {
                spanGreen.classList.remove("yellowIsMedium", "redIsHigh");
            };
            spanGreen.classList.add("greenIsLow");
            spanGreen.removeAttribute("style");
            updateDataColor(spanGreen, "rgb(92, 238, 92)");
        }
    }
}

function updateDataTitle(element) {
    let cards = dataManager.state.currentUser.cards;
    let titleContent = element.value;
    for (let i = 0; i < cards.length; i++) {
        if (cards[i].code == element.getAttribute("code")) {
            cards[i].title = titleContent;
            dataManager.saveData();
        }
    }
}

function updateDataTodo(element) {
    let cards = dataManager.state.currentUser.cards;
    let todoItem = {
        content: element.value,
        color: ""
    }
    for (let i = 0; i < cards.length; i++) {
        if (cards[i].code == element.getAttribute("code")) {
            cards[i].todos.push(todoItem);
            dataManager.saveData();
            cardManager.render();
        }
    }
}

function updateDataColor(element, str) {
    let cards = dataManager.state.currentUser.cards;
    let ul = element.parentNode.parentNode;
    for (let i = 0; i < cards.length; i++) {
        if (cards[i].code == ul.getAttribute("code")) {
            for (let j = 0; j < cards[i].todos.length; j++) {
                if (cards[i].todos[j].content == element.innerText) {
                    cards[i].todos[j].color = str;
                    dataManager.saveData();
                }
            }
        }
    }
}

function deleteTodoItem(element) {
    let cards = dataManager.state.currentUser.cards;
    let ul = element.parentNode.parentNode;
    let content = element.nextSibling.innerText;
    console.log("hi");
    ul.removeChild(element.parentNode);
    for (let i = 0; i < cards.length; i++) {
        if (cards[i].code == ul.getAttribute("code")) {
            for (let j = 0; j < cards[i].todos.length; j++) {
                if (cards[i].todos[j].content == content) {
                    cards[i].todos.splice(j, 1);
                    dataManager.saveData();
                }
            }
        }
    }
}