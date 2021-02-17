import React , { useEffect } from 'react';
import Todos from './Todos';
const LOCAL_STORAGE_KEY = 'todoApp.todos';

export default function TodoList({todos, setTodos}) {

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
        const newTodos = [...{todos}];
        const todo = newTodos.find(todo => todo.id === id);
        todo.complete = !todo.complete;
        setTodos(newTodos);
    }


    return (
        <ul>
            <Todos todos={todos} toggleTodo={toggleTodo}/>
        </ul>
    )
}
