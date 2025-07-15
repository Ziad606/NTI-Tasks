let todoList = [];

function showTodoList() {
    document.querySelector(".todo-list tbody").innerHTML = "";
    todoList.forEach((task) => {
        document.querySelector(".todo-list tbody").appendChild(task);
    });
}

function addTodo() {
    let task = document.getElementById("todo-input").value;
    let taskType = document.getElementById("todo-type").value;

    let newTask = document.createElement("tr");
    newTask.innerHTML = `
        <td class="todo-list-item" id="todo-task">${task}</td>
        <td class="todo-list-item" style="${
            taskType === "Task"
                ? "background-color: red"
                : taskType === "In Progress"
                ? "background-color: orange"
                : "background-color: green"
        }" id="todo-task-type">${taskType}</td>
        <td class="todo-list-item" id="todo-task-date">${new Date().toLocaleDateString()}</td>
        <td class="todo-list-item">
            <button class="todo-button" style="background-color: red" onclick="deleteTodo(this)">Delete</button>
            <button class="todo-button" style="background-color: blue" onclick="editTodo(this)">Edit</button>
        </td>
    `;
    todoList.push(newTask);
    showTodoList();
}

function deleteTodo(task) {
    todoList.splice(todoList.indexOf(task), 1);
    showTodoList();
}

function editTodo(task) {
    let newTask = prompt("Enter the new task content");
    let newTaskType = prompt(
        "Enter the number of new task type \n(1: task, 2: in progress, 3: done)"
    );
    if (newTaskType === "1") {
        newTaskType = "Task";
    } else if (newTaskType === "2") {
        newTaskType = "In Progress";
    } else if (newTaskType === "3") {
        newTaskType = "Done";
    }
    if (newTask === "" || newTaskType === "") {
        alert("Please enter a valid task and task type");
    } else {
        task.parentElement.parentElement.querySelector("#todo-task").innerHTML =
            newTask;
        task.parentElement.parentElement.querySelector(
            "#todo-task-type"
        ).innerHTML = newTaskType;
        task.parentElement.parentElement.querySelector(
            "#todo-task-type"
        ).style.backgroundColor =
            newTaskType === "Task"
                ? "red"
                : newTaskType === "In Progress"
                ? "orange"
                : "green";
        showTodoList();
    }
}
