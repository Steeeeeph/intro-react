import React, { useState, useEffect , useRef}  from 'react';

import TodoList from './components/TodoList';
import InputTodo from './components/InputTodo';

const lsKey = 'todoApp.todos';

function App() {
    const [todos, setTodos] = useState([]);
    const todoNameRef = useRef();

    // getting stored todos from local storage
    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem(lsKey));
        console.log(storedTodos);
        // check empty storage
        if (storedTodos != null){
            return setTodos(storedTodos);
        }
    }, []);

    // storing todos in local storage
    useEffect(() => {
        localStorage.setItem(lsKey, JSON.stringify(todos));
    }, [todos]);

    return (
        <div>
            <header>
                <h1>todos ²</h1>
            </header>
            <InputTodo setTodos={setTodos} todos={todos} todoNameRef={todoNameRef} />
            <TodoList setTodos={setTodos} todos={todos} />
        </div>
    );
}

export default App;
