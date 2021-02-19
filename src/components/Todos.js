import React from 'react';
import Todo from './Todo';

export default function Todos({ todos, toggleTodo, editTodo, enterNewName, todoNameRef}) {
    return (
        todos.map((todo) => (
            <Todo toggleTodo={toggleTodo} todo={todo} editTodo={editTodo} enterNewName={enterNewName} todoNameRef={todoNameRef}/>
            )
        )
    )
}
