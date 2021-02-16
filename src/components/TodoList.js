import React, { useState }  from 'react';
import InputTodo from './InputTodo';
import Todos from './Todos';

export default function TodoList() {
    const arrayTodos = ["My first todo", "My second todo", "third one"];
    const [todos, setTodos] = useState(arrayTodos);

    return (
        <div>
            <header>
                <h1>todos</h1>
            </header>
            <InputTodo />
            <ul>
                <Todos todos={todos}/>
            </ul>
      </div>
    )
}
