let cont = 1;
let days = ["Sunday", "Monday", "Tuesday", "Wednesday","Thursday", "Friday", "Saturday"];
let months = ["JAN","FEB","MAR","APR", "MAY","JUN", "JUL","AUG","SEP","OCT","NOV","DEC"];
let time = ["hours,minutes"]
window.onload = function(){
	
	let date = new Date();
	document.getElementById('day').innerHTML = date.getDate();
	document.getElementById('year').innerHTML = date.getFullYear();
	document.getElementById('month_name').innerHTML = months[date.getMonth()];
	document.getElementById('week').innerHTML = days[date.getUTCDay()];
	document.getElementById('time').innerHTML = date.getHours() + ":" + date.getMinutes();

//selectors
let form = document.querySelector(".schedule-form");
const todoInput = document.querySelector('.todo_input');
const todoButton = document.querySelector('.todo_button');
const todoList = document.querySelector('.todo_list');
const filterOption = document.querySelector('.filter_todo');
//event listeners
todoButton.addEventListener("click", addTodo)
todoList.addEventListener("click", deleteCheck)
filterOption.addEventListener("click", filterTodo)
//functions

form.addEventListener("submit", e => {
	e.preventDefault();

	// let item =  document.querySelector(".todo_input").value;
	addTodo()

})

function addTodo(event) {
    event.preventDefault();
    //todo DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //todo LI 
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo_item');
    todoDiv.appendChild(newTodo);
    if(todoInput.value === ""){
        return null
    }
    //check mark BUTTON
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete_btn')
    todoDiv.appendChild(completedButton);
    //delete BUTTON
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.classList.add('delete_btn')
    todoDiv.appendChild(deleteButton);
    //Append to Actual LIST
    todoList.appendChild(todoDiv);
    //Clear todo input VALUE
    todoInput.value = ""
}

//DELETE & CHECK
function deleteCheck(e) {
    const item = e.target;
    //DELETE ITEM
    if (item.classList[0] === "delete_btn") {
        const todo = item.parentElement;
        //ANIMATION TRANSITION
        todo.classList.add("fall")
        todo.addEventListener('transitionend', function () {
            todo.remove()
        })
    }
    //COMPLETE ITEM
    if (item.classList[0] === "complete_btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completedItem")
    }
}
//FILTERING THE TASKS ACCORDING THE OPTION
function filterTodo(e) {
    const todos = todoList.childNodes;
    for(let i = 0; i<todos.length; i++ ){
        switch (e.target.value) {
            case "all":
                todos[i].style.display = "flex";
                break;
            case "completed":
                if (todos[i].classList.contains('completedItem')) {
                    todos[i].style.display = "flex";
                } else {
                    todos[i].style.display = "none";
                }
                break;
            case "uncompleted":
                if (!todos[i].classList.contains('completedItem')) {
                    todos[i].style.display = "flex";
                } else {
                    todos[i].style.display = "none";
                }
                break;
        }
    }
}}