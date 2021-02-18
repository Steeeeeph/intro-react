import React from 'react';
export default function Todo({ todo , setTodos}) {
    let textDecoration = 'none'
    if (todo.complete) {
         textDecoration = 'line-through';
    }
    // function handleToggleTodo(e){

        // toggleTodo();
    // }
    function toggleTodo(e) {
        const newTodo = [todo];
        console.log(newTodo);
        // TODO get key of the clicked 

        // console.log(newTodos.map(newTodo => newTodo.key === key));
        // const todo = newTodos.filter(newTodo => newTodo.key === key);
        console.log(todo);
        todo.complete = !todo.complete;
        setTodos(newTodo);

    }

    return (
        <li style={{ listStyleType: 'none'}}>
            <input type="checkbox" name="item" id="item" checked={todo.complete} onChange={toggleTodo()}/> <span style={{ textDecoration: textDecoration}}>{todo.name}</span>
        </li>      
    )
}
