import React from 'react';
export default function Todo({ key, todo , toggleTodo}) {
    let textDecoration = 'none'
    if (todo.complete) {
         textDecoration = 'line-through';
    }
    // function handleToggleTodo(){
    //     toggleTodo();
    // }
    return (
        <li style={{ listStyleType: 'none'}}>
            <input type="checkbox" name="item" id="item" checked={todo.complete} onChange={toggleTodo}/> <span style={{ textDecoration: textDecoration}}>{todo.name}</span>
        </li>      
    )
}
