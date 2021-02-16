import React, { useState , useRef, useEffect }   from 'react';
import { v4 as uuidv4 } from 'uuid';
import InputTodo from './InputTodo';
import Todos from './Todos';

const LOCAL_STORAGE_KEY = 'todoApp.todos';
export default function TodoList() {

    const [todos, setTodos] = useState([]);
    const todoNameRef = useRef( );

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

    function toggleTodo(id) {
        // copy of our todos
        const newTodos = [...todos];
        const todo = newTodos.find(todo => todo.id === id);
        todo.complete = !todo.complete;
        setTodos(newTodos);
    }
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
                <h1>todos</h1>
            </header>
            <InputTodo handleAddTodo={handleAddTodo} todoNameRef={todoNameRef}/>
            <ul>
                <Todos todos={todos} toggleTodo={toggleTodo}/>
            </ul>
      </div>
    )
}
