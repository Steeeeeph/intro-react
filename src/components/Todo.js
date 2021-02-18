import React from 'react';
export default function Todo({ todo, toggleTodo }) {
    let textDecoration = 'none'
    if (todo.complete) {
         textDecoration = 'line-through';
    }
    function handleToggleTodo(e){

        toggleTodo(todo.itemId);
    }


    return (
        <li style={{ listStyleType: 'none'}}>
            <input type="checkbox" name="item" id="item" checked={todo.complete} onChange={handleToggleTodo}/> <span style={{ textDecoration: textDecoration}}>{todo.name}</span>
        </li>      
    )
}
