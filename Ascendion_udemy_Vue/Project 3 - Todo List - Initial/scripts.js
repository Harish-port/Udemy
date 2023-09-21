const todosApp = {
    data() {
        return {
            todos: [],
            newTodo: {
                done: false
            }
        }
    },
    methods: {
        addTodos() {
            if (this.newTodo.text) {
                this.todos.push(this.newTodo);
                this.newTodo = {
                    done: false
                };
                localStorage.setItem("todos",JSON.stringify(this.todos));
            } else {
                alert("The text field must be filled")
            }
        },
        beforeC
    }
}

Vue.createApp(todosApp).mount('#app');