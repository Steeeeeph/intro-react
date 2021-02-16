import React, { useState } from 'react';
// import Todo from 'Todo';

export default function Todos() {
    const arrayTodos = ["My first todo", "My second todo", "third one"];
    const [todos, setTodos] = useState(arrayTodos);
    return (
            <ul>
                {todos.map((todo) =>( 
                    <li style={{ listStyleType: 'none' }}>                
                        <input type="checkbox" name="item" id="item" unchecked/>{todo}
                    </li>      
                ))}     
            </ul>
    )
}
