// import './App.css';
import React, { useState } from 'react';
import TodoList from './components/TodoList';
import InputTodo from './components/InputTodo';

const lsKey = 'todoApp.todos';

function App() {
  const [todos, setTodos] = useState([]);
    // getting stored todos from local storage

  return (
    <div>
      <header>
          <h1>todos ²</h1>
      </header>
      <InputTodo setTodos={setTodos}/>
      <TodoList setTodos={setTodos} todos={todos} lsKey={lsKey}/>
    </div>
  );
}

export default App;
