let todos = [];

function init() {
    // Initialize the to-do list

    let leftPaneDiv = document.createElement("div");
    let rightPaneDiv = document.createElement("div");

    leftPaneDiv.setAttribute("id", "leftDiv");
    rightPaneDiv.setAttribute("id", "rightDiv");

    document.body.appendChild(leftPaneDiv);
    document.body.appendChild(rightPaneDiv);

    var heading = document.createElement("h1");
    heading.innerHTML = "TASK LIST";
    leftPaneDiv.appendChild(heading);

    var subHeading = document.createElement("h3");
    subHeading.innerHTML = "Add tasks to your list by typing to the right and pressing enter. You may then view pending tasks below.";
    leftPaneDiv.appendChild(subHeading);

    var todoText = document.createElement("textarea");
    todoText.setAttribute("id", "todoText");
    todoText.setAttribute("placeholder", "Enter your to-do list here");
    rightPaneDiv.appendChild(todoText);

    todoText.addEventListener("keydown", addTodo);
}

function addTodo(event) {
    // Add a to-do item to the list
    var todoText = document.getElementById("todoText");

    if (event.code === "Enter" && todoText.value !== "") {
        event.preventDefault();
        var todoList = document.getElementById("leftDiv");
        var todoItem = document.createElement("div");
        var taskHeading = document.createElement("p");
        var checkbox = document.createElement("input");
        var deleteButton = document.createElement("button");

        checkbox.setAttribute("type", "checkbox");
        checkbox.setAttribute("id", "checkbox");
        checkbox.setAttribute("onclick", "checkboxClicked(this)");

        deleteButton.setAttribute("id", "deleteButton");
        // deleteButton.setAttribute("onclick", "deleteTodo(this)");
        deleteButton.setAttribute("src", "close.png");

        todoItem.setAttribute("class", "todoItem");
        taskHeading.innerHTML = todoText.value;

        todoItem.appendChild(taskHeading);
        todoItem.appendChild(checkbox);
        todoItem.appendChild(deleteButton);

        todos.push(todoText.value);

        localStorage.setItem("todos", JSON.stringify(todos));

        todoList.appendChild(todoItem);
        todoText.value = "";
    }
}

init();

let storedTodos = localStorage.getItem("todos");

if(storedTodos !== null) {
    todos = JSON.parse(storedTodos);
}

todos.forEach(function(value){

    var todoList = document.getElementById("leftDiv");
    var todoItem = document.createElement("div");
    var taskHeading = document.createElement("p");
    var checkbox = document.createElement("input");
    var deleteButton = document.createElement("button");

    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("id", "checkbox");
    checkbox.setAttribute("onclick", "checkboxClicked(this)");

    deleteButton.setAttribute("id", "deleteButton");
    // deleteButton.setAttribute("onclick", "deleteTodo(this)");
    deleteButton.setAttribute("src", "close.png");

    todoItem.setAttribute("class", "todoItem");
    taskHeading.innerHTML = value;

    todoItem.appendChild(taskHeading);
    todoItem.appendChild(checkbox);
    todoItem.appendChild(deleteButton);

    todoList.appendChild(todoItem);
    todoText.value = "";

})

function checkboxClicked(checkbox) {
    // Check or uncheck a to-do item
    if (checkbox.checked) {
        checkbox.parentElement.style.textDecoration = "line-through";
    } else {
        checkbox.parentElement.style.textDecoration = "none";
    }
}