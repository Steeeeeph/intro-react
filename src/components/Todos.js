import React from 'react';
import Todo from './Todo';

export default function Todos({ todos,  setTodos}) {
    return (
        todos.map((todo) => (
            <Todo setTodos={setTodos} todo={todo} />
        ))
    )
}
