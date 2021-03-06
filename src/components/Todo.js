import React from 'react';
export default function Todo({ todo, toggleTodo, editTodo, enterNewName, todoNameRef}) {
    let textDecoration = 'none';
    const valueName = todo.name;
    if (todo.complete) {
         textDecoration = 'line-through';
    }
    function handleToggleTodo(e){
        toggleTodo(todo.itemId);
    }
    function handleEditName(e) {
        editTodo(todo.itemId);
    }
    function enterKey(e){
        if(e.key === "Enter" && e.target.value != '') {
            enterNewName(todo.itemId, e.target.value);
        } else if (e.key === "Escape" || e.currentTarget != e.target) {
            enterNewName(todo.itemId, todo.name);
        };
    }
    function onBlur(e) {
        if (todo.edit) {
            enterNewName(todo.itemId, todo.name);
        }
    }

    return (
        <li style={{ listStyleType: 'none'}}>
            <input type="checkbox" name="item" id="item" checked={todo.complete} onChange={handleToggleTodo} /> 
            {
                !todo.edit ? <span style={{ textDecoration: textDecoration}} onDoubleClick={handleEditName}> {todo.name}</span> : <input ref={todoNameRef}  placeholder={todo.name} type="text" onKeyDown={enterKey} onBlur={onBlur}/>
            }
        </li>
    )
}