import React from 'react';
import Todos from './Todos';


export default function TodoList({todos, setTodos }) {
    function toggleTodo(itemId) {
        const newTodos = [...todos];
        console.log(newTodos);
        newTodos.filter(todo => {
            if (todo.itemId === itemId) {
                todo.complete = !todo.complete;
            }}
        );
        setTodos(newTodos);

    }

    return (
        <ul>
            <Todos todos={todos} toggleTodo={toggleTodo}/>
        </ul>
    )
}
