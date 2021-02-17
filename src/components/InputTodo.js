import React , {useRef} from 'react';


export default function InputTodo({id, setTodos}) {

    const todoNameRef = useRef( );

    function handleAddTodo(e){
        const name = todoNameRef.current.value;
        if (name === '') return;
        setTodos(prevTodos => {
            return [...prevTodos, {id: id, name: name, complete: false}];
        })
        todoNameRef.current.value = null;
    }
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
