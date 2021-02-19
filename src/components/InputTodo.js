import React from 'react';
import { v4 as uuidv4 } from 'uuid';


export default function InputTodo({todoNameRef, handleAddTodo, setTodos, todos}) {
    function handleAddTodo(e){
        const name = todoNameRef.current.value;
        if (name === '') {
            return;
        }
        setTodos(prevTodos => {
            return [...prevTodos, {itemId: uuidv4(), name: name, complete: false, edit:false}];
        })
        todoNameRef.current.value = null;
    }
    // make enter key work for submitting todos
    function enterKey(e){
        if(e.key === "Enter") {
            handleAddTodo();
        }
    }
    function deleteCompleted(e){
        const deleteTodos = [...todos].filter(todo =>
            (todo.complete === false)
        );
        setTodos(deleteTodos);
    }
    return (
        <div>
            <input ref={todoNameRef} onKeyDown={enterKey} type="text" name="newTodo" id="newTodo"/>
            <input onClick={handleAddTodo} type="submit" value="+"/>
            <input onClick={deleteCompleted} type="submit" value="x"/>
        </div>
    )
}
