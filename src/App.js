// import './App.css';
import React, { useState } from 'react';
import TodoList from './components/TodoList';
import InputTodo from './components/InputTodo';
import { v4 as uuidv4 } from 'uuid';

const lsKey = 'todoApp.todos';

function App() {
  const [todos, setTodos] = useState([]);
  let key = uuidv4();
    // getting stored todos from local storage

  return (
    <div>
      <header>
          <h1>todos ²</h1>
      </header>
      <InputTodo  id={key} setTodos={setTodos}/>
      <TodoList id={key} setTodos={setTodos} todos={todos} lsKey={lsKey}/>
    </div>
  );
}

export default App;
