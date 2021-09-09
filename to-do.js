var cont = 1;
var days = ["Sunday", "Monday", "Tuesday", "Wednesday","Thursday", "Friday", "Saturday"];
var months = ["JAN","FEB","MAR","APR", "MAY","JUN", "JUL","AUG","SEP","OCT","NOV","DEC"];
var time = ["hours,minutes"]
window.onload = function(){
	
	var date = new Date();
	document.getElementById('day').innerHTML = date.getDate();
	document.getElementById('year').innerHTML = date.getFullYear();
	document.getElementById('month_name').innerHTML = months[date.getMonth()];
	document.getElementById('week').innerHTML = days[date.getUTCDay()];
	document.getElementById('time').innerHTML = date.getHours() + ":" + date.getMinutes();


	
	document.getElementById("add_but").addEventListener("click", function(){
		addNode(false);
	});
	
	addNode(true);
	addNode();
	
}

function addNode(checked){
	let newNode = document.createElement('article');      
newNode.innerHTML  = "<input type='checkbox' id='t"+cont+"' "+((checked)?"checked":"")+"/><label for='t"+cont+"'></label><span contenteditable='true'>Task #"+cont+"</span>";
		newNode.id = "article"+cont;
		newNode.ondblclick = onDblClick;
		cont++;
	var main_sec = document.getElementById("main_sec");
		main_sec.appendChild(newNode);
		
		main_sec.scrollTop = main_sec.scrollHeight;
}

function onDblClick(event){
	document.getElementById(event.target.id).remove();
}

const todoButton = document.querySelector('.todo_button');

todoList.addEventListener("click", deleteCheck)

 //delete BUTTON
 const deleteButton = document.createElement('button');
 deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
 deleteButton.classList.add('delete_btn')
 todoDiv.appendChild(deleteButton);
 //Append to Actual LIST
 todoList.appendChild(todoDiv);
 //Clear todo input VALUE
 todoInput.value = ""


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
 }}

 
