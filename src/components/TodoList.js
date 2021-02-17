import React , { useEffect } from 'react';
import Todos from './Todos';


export default function TodoList({todos, setTodos, key, lsKey}) {

    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem(lsKey));
        if (storedTodos){
            return setTodos(storedTodos);
        }
    }, []);

    // storing todos in local storage
    useEffect(() => {
        localStorage.setItem(lsKey, JSON.stringify(todos))
    }, [todos]);

    function toggleTodo() {
        // ... = copy of our todos
        const newTodos = [...{todos}];
        const todo = newTodos.find(todo => todo.id === key);
        todo.complete = !todo.complete;
        setTodos(newTodos);
    }

    return (
        <ul>
            <Todos todos={todos} toggleTodo={toggleTodo} />
        </ul>
    )
}
