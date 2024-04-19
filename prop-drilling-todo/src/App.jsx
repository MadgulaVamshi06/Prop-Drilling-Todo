// App.js

import { useState } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const App = () => {

  const [todos, setTodos] = useState([]);

  const addTask = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const removeTodo = todoId => {
    setTodos(todos.filter(todo => todo.id !== todoId));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm addTask={addTask} />
      <TodoList todos={todos} removeTodo={removeTodo} />
      
    </div>
  );
};

export default App;
