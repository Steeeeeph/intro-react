import React from 'react';

export default function InputTodo({handleAddTodo, todoNameRef}) {
    // make enter key work for submitting todos
    function enterKey(e){

        if(e.key === "Enter") {
            handleAddTodo();
        }
    }
    return (
        <div>
            <input ref={todoNameRef} onKeyDown={enterKey} type="text" name="newTodo" id="newTodo"/>
            <input onClick={handleAddTodo} type="submit" value="+"/>
        </div>
    )
}
