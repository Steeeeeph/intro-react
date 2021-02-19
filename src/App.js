// import './App.css';
import React, { useState, useEffect , useRef}  from 'react';
import { v4 as uuidv4 } from 'uuid';

import TodoList from './components/TodoList';
import InputTodo from './components/InputTodo';

const lsKey = 'todoApp.todos';

function App() {
  const [todos, setTodos] = useState([]);
  
    // getting stored todos from local storage
    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem(lsKey));
        console.log(storedTodos);
        // TODO check empty storage
        if (storedTodos != null){
            return setTodos(storedTodos);
        }
    }, []);

    // storing todos in local storage
    useEffect(() => {
        localStorage.setItem(lsKey, JSON.stringify(todos));
    }, [todos]);

    const todoNameRef = useRef( );

    function handleAddTodo(e){
        const name = todoNameRef.current.value;
        if (name === '') return;
        setTodos(prevTodos => {
            return [...prevTodos, {itemId: uuidv4(), name: name, complete: false}];
        })
        todoNameRef.current.value = null;
    }
    function deleteCompleted(e){
        const deleteTodos = [...todos].filter(todo => 
            (todo.complete === false)
        );
        setTodos(deleteTodos);
    }
    return (
        <div>
        <header>
            <h1>todos ²</h1>
        </header>
        <InputTodo todoNameRef={todoNameRef} handleAddTodo={handleAddTodo} deleteCompleted={deleteCompleted}/>
        
        <TodoList setTodos={setTodos} todos={todos} />
        </div>
    );
}

export default App;
