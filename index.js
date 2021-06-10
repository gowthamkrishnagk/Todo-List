//selectors
const todoInput=document.querySelector('.todo-input');
const todoButton=document.querySelector('.todo-button');
const todoList=document.querySelector('.todo-list');
//event listeners
// document.addEventListener('DOMContentLoaded',getTodos);
todoButton.addEventListener("click",addTodo);
todoList.addEventListener("click",deleteCheck);
//function
function addTodo(event){

    event.preventDefault();
    if(todoInput.value!==""){
        const todoDiv=document.createElement('div');
        todoDiv.classList.add('todo');
        var newTodo=document.createElement('li');
        newTodo.innerText=todoInput.value;
        newTodo.classList.add('todo-item');
  
        todoDiv.appendChild(newTodo);
        ///ADD TODO TO LOCAL STORAGE
        // saveLocalTodos(todoInput.value);
        //check
        const completedButton=document.createElement('button');
        completedButton.innerHTML="<i class='fas fa-check'></i>";
        completedButton.classList.add('completed-button');
        todoDiv.appendChild(completedButton);
        //////////////////////////////////
        const editDiv=document.createElement('div');
        editDiv.classList.add('edit-div');
        todoDiv.appendChild(editDiv);
        ////edit button/////////////////////////////////////////////////////
        var editButton=document.createElement('button');
        editButton.innerHTML="<i class='fas fa-edit'></i>";
        editButton.classList.add('edit-button');
        
        editButton.type='button';
        editDiv.appendChild(editButton);
        editButton.addEventListener("click",function(){ 
            var nw= window.prompt();
            newTodo.innerText=nw;
        });
        //trash
        const trashButton=document.createElement('button');
        trashButton.innerHTML="<i class='fas fa-trash'></i>";
        trashButton.classList.add('trash-button');
        todoDiv.appendChild(trashButton);
        ///appemd
        todoList.appendChild(todoDiv);
        //clear
        todoInput.value="";
        }
        else{
            setTimeout(function(){
                alert("value required!!!");
            },1000);
        }
}


function deleteCheck(e){
const item=e.target;
///delete
if(item.classList[0]==="trash-button"){
    const todo=item.parentElement;
    //add animation
    todo.classList.add("fall");
    todo.addEventListener('trasitioned',function(){
        todo.remove();
    })
    
}
///check mark
if(item.classList[0]==="completed-button"){
    const todo=item.parentElement;
    todo.classList.toggle("completed");
}
}







// function saveLocalTodos(todo){
//     let todos;
//     if(localStorage.getItem('todo')===null){
//         todos=[];
//     }else{
//         todos=JSON.parse(localStorage.getItem('todos'));
//     }

//     todos.push(todo);
//     localStorage.setItem('todos',JSON.stringify(todos));
// }




// function getTodos(){
//     let todos;
    
//     if(localStorage.getItem('todo')===null){
//         todos=[];
//     }else{
//         todos=JSON.parse(localStorage.getItem('todos'));
//     }
//     todos.forEach(function(todo){
//         const todoDiv=document.createElement('div');
//         todoDiv.classList.add('todo');
//         var newTodo=document.createElement('li');
//         newTodo.innerText=todo;
//         newTodo.classList.add('todo-item');
  
//         todoDiv.appendChild(newTodo);
//         ///ADD TODO TO LOCAL STORAGE
       
//         //check
//         const completedButton=document.createElement('button');
//         completedButton.innerHTML="<i class='fas fa-check'></i>";
//         completedButton.classList.add('completed-button');
//         todoDiv.appendChild(completedButton);
//         //////////////////////////////////
//         const editDiv=document.createElement('div');
//         editDiv.classList.add('edit-div');
//         todoDiv.appendChild(editDiv);
//         ////edit button/////////////////////////////////////////////////////
//         var editButton=document.createElement('button');
//         editButton.innerHTML="<i class='fas fa-edit'></i>";
//         editButton.classList.add('edit-button');
        
//         editButton.type='button';
//         editDiv.appendChild(editButton);
//         editButton.addEventListener("click",function(){ 
//             var nw= window.prompt();
//             newTodo.innerText=nw;
//         });
//         //trash
//         const trashButton=document.createElement('button');
//         trashButton.innerHTML="<i class='fas fa-trash'></i>";
//         trashButton.classList.add('trash-button');
//         todoDiv.appendChild(trashButton);
//         ///appemd
//         todoList.appendChild(todoDiv);
//     });
// }