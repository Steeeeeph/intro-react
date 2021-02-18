import React from 'react';
import Todo from './Todo';

export default function Todos({ todos, toggleTodo}) {
    return (
        todos.map((todo) => (
            <Todo toggleTodo={toggleTodo} todo={todo} />
        ))
    )
}
