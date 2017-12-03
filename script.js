let toDoList = 
{
    todos: [],
    displayTodos: function() {
        if (this.todos.length === 0){
            console.log("Your todo list is empty!");
        } else {
            console.log("My Todos:");
            for (let i = 0; i < this.todos.length; i++) {
                if (this.todos[i].completed === true){
                    console.log("(x)" + this.todos[i].todoText);
                } else {
                    console.log("( )" + this.todos[i].todoText);
                }
            }
         }
    },

    addTodo: function(todoText) {
        this.todos.push({
            todoText: todoText,
            completed : false
        });
        this.displayTodos();
    },
    changeTodo: function(position, todoText) {
        this.todos[position].todoText = todoText;
        this.displayTodos();
    },
    deleteTodo : function(position) {
        this.todos.splice(position, 1);
        this.displayTodos();
    },
    toggleCompleted : function(position) {
        var todo = this.todos[position];
        todo.completed = !todo.completed; 
        this.displayTodos();

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
        this.displayTodos();
     }
};

let displayTodosButton = document.getElementById('displayTodosButton');
displayTodosButton.addEventListener('click', function(){
    toDoList.displayTodos();
});

let toggleAllButton = document.getElementById('toggleAllButton');
toggleAllButton.addEventListener('click', function(){
    toDoList.toggleAll();
})
