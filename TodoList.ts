// TodoItem interface
interface TodoItem {
  id: number;
  task: string;
  completed: boolean;
  dueDate: Date;
}


class TodoList {
  private todos: TodoItem[] = [];
  private nextId: number = 1;

  // Add a new todo item
  addTodo(task: string, dueDate: Date): void {
    this.todos.push({ id: this.nextId++, task, completed: false, dueDate });
  }

  // Mark a todo item as completed
  completeTodo(id: number): void {
    const todo = this.todos.find(todo => todo.id === id);
    if (todo) {
      todo.completed = true;
    } else {
      console.error(`Todo with ID ${id} not found.`);
    }
  }

  // Remove a todo item
  removeTodo(id: number): void {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  // List all todo items
  listTodos(): TodoItem[] {
    return this.todos;
  }

  // Filter todos by their completed status
  filterTodos(completed: boolean): TodoItem[] {
    return this.todos.filter(todo => todo.completed === completed);
  }

  // Update the task description of a todo item
  updateTodo(id: number, newTask: string): void {
    const todo = this.todos.find(todo => todo.id === id);
    if (todo) {
      todo.task = newTask;
    } else {
      console.error(`Todo with ID ${id} not found.`);
    }
  }

  // Clear all completed todos
  clearCompleted(): void {
    this.todos = this.todos.filter(todo => !todo.completed);
  }
}


const myTodoList = new TodoList();
myTodoList.addTodo("Learn TypeScript", new Date("2025-03-10"));
myTodoList.addTodo("Build a project", new Date("2025-03-15"));

console.log("All Todos:", myTodoList.listTodos());
myTodoList.completeTodo(1);
console.log("Completed Todos:", myTodoList.filterTodos(true));
myTodoList.updateTodo(2, "Build a Todo App");
console.log("Updated Todos:", myTodoList.listTodos());
myTodoList.clearCompleted();
console.log("After Clearing Completed:", myTodoList.listTodos());
