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
        var readButton = document.createElement("button");
        var deleteButton = document.createElement("button");

        todoItem.setAttribute("class", "todoItem");
        taskHeading.innerHTML = todoText.value;

        readButton.innerHTML = "Read";
        deleteButton.innerHTML = "Delete";

        todoItem.appendChild(taskHeading);
        todoItem.appendChild(readButton);
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
    var readButton = document.createElement("button");
    var deleteButton = document.createElement("button");


    todoItem.setAttribute("class", "todoItem");
    taskHeading.innerHTML = value;

    readButton.innerHTML = "Read";
    deleteButton.innerHTML = "Delete";

    todoItem.appendChild(taskHeading);
    todoItem.appendChild(readButton);
    todoItem.appendChild(deleteButton);

    todoList.appendChild(todoItem);
    todoText.value = "";

})