import React from 'react';
import Todos from './Todos';


export default function TodoList({todos, setTodos, todoNameRef}) {
    function toggleTodo(itemId) {
        const newTodos = [...todos];
        // console.log(newTodos);
        newTodos.filter(todo => {
            if (todo.itemId === itemId) {
                todo.complete = !todo.complete;
            }}
        );
        setTodos(newTodos);
    }

    function editTodo(itemId) {
        const editName = [...todos];
        editName.filter(todo => {
            if (todo.itemId === itemId){
                todo.edit = !todo.edit;
            }}
        );
        setTodos(editName);
    }
    function enterNewName(itemId, editedName) {
        const newName = [...todos];
        newName.filter(todo => {
            if (todo.itemId === itemId){
                todo.name = editedName;
                todo.edit = !todo.edit;
            }}
        );
        setTodos(newName);
    }
    return (
        <ul>
            <Todos todos={todos} toggleTodo={toggleTodo} editTodo={editTodo} enterNewName={enterNewName} todoNameRef={todoNameRef} />
        </ul>
    )
}
