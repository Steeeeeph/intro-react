// import './App.css';
import React, { useState , useRef, useEffect } from 'react';
import TodoList from './components/TodoList';
import InputTodo from './components/InputTodo';
import { v4 as uuidv4 } from 'uuid';

const LOCAL_STORAGE_KEY = 'todoApp.todos';

function App() {
  const todoNameRef = useRef( );
  const [todos, setTodos] = useState([]);
  
    // getting stored todos from local storage
    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        if (storedTodos){
            setTodos(storedTodos);
        }
    }, []);

    // storing todos in local storage
    useEffect(() => {      
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
    }, [todos]);
  function handleAddTodo(e){
    const name = todoNameRef.current.value;
    if (name === '') return;
    setTodos(prevTodos => {
        return [...prevTodos, {id:uuidv4(), name: name, complete: false}];
    })
    todoNameRef.current.value = null;
}
  return (
    <div>
      <header>
          <h1>todos ²</h1>
      </header>
      <InputTodo handleAddTodo={handleAddTodo} todoNameRef={todoNameRef}/>
      <TodoList setTodos={setTodos} todos={todos}/>
    </div>
  );
}

export default App;
