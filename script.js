let toDoList = 
{
    todos: [],
    addTodo: function(todoText) {
        this.todos.push({
            todoText: todoText,
            completed : false
        });
    },
    changeTodo: function(position, todoText) {
        this.todos[position].todoText = todoText;
    },
    deleteTodo : function(position) {
        this.todos.splice(position, 1);
    },
    toggleCompleted : function(position) {
        var todo = this.todos[position];
        todo.completed = !todo.completed; 

    },
    toggleAll : function () {
        var totalTodos = this.todos.length;
        var completedTods = 0;
        for (let i = 0; i < totalTodos; i++) {
            if (this.todos[i].completed === true) {
                completedTods++;
            }
        }
        if (completedTods === totalTodos){
            for (let i = 0; i < totalTodos; i++) {
                this.todos[i].completed = false;
            } 
            } else {
                for (let i = 0; i < totalTodos; i++) {
                this.todos[i].completed = true;
                }
            }
     }
};
// Conect button with function
let handlers = {
    addTodo: function(){
        let addTodoTextInput = document.getElementById('addTodoTextInput');
        toDoList.addTodo(addTodoTextInput.value);
        addTodoTextInput.value = ' '; 
        view.displayTodos();
    },
    changeTodo: function(){
        let changeTodoPositionNumber = document.getElementById('changeTodoPositionNumber');
        let changeTodoTextInput = document.getElementById('changeTodoTextInput');
        toDoList.changeTodo(changeTodoPositionNumber.valueAsNumber, changeTodoTextInput.value);
        changeTodoPositionNumber.valueAsNumber = " ";
        changeTodoTextInput.value = " ";
        view.displayTodos();
    },
    deleteTodo: function(position) {
        toDoList.deleteTodo(position);
        view.displayTodos();
    },
    toggleCompleted: function() {
        let toggleCompletedPositionInput = document.getElementById("toggleCompletedPositionInput");
        toDoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
        toggleCompletedPositionInput.valueAsNumber = " ";
        view.displayTodos();
    },
    toggleAll: function(){
        toDoList.toggleAll();
        view.displayTodos();
    }
};

let view = {
    displayTodos: function() {
        let todosUl = document.querySelector('ul');
        todosUl.innerHTML = " ";

        for (let i = 0; i < toDoList.todos.length; i++){
            let todoLi = document.createElement('li');
            let todo = toDoList.todos[i];
            let todoTextWithCompletion = ' ';

            if (todo.completed === true) {
                todoTextWithCompletion = '(x)' + " " + todo.todoText;
            } else {
                todoTextWithCompletion = '( )' + " " + todo.todoText;
            }

            todoLi.id = i; 
            todoLi.textContent = todoTextWithCompletion
            todoLi.appendChild(this.createDeleteButton());
            todosUl.appendChild(todoLi)
        }
    },
    createDeleteButton: function() {
        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'delete';
        deleteButton.className = "deleteButton"; 
        return deleteButton
    },
    setupEventListener: function() {
        let todosUl = document.querySelector('ul');
        todosUl.addEventListener('click', function(event){
           let elementClicked = event.target;
           if(elementClicked.className === "deleteButton"){
               handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
           }
        
        });
    }

};
view.setupEventListener();
