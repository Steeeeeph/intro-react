import React  from 'react';
import Todos from './Todos';

export default function TodoList({todos, setTodos}) {

    function toggleTodo(id) {
        // copy of our todos
        const newTodos = [...{todos}];
        const todo = newTodos.find(todo => todo.id === id);
        todo.complete = !todo.complete;
        setTodos(newTodos);
    }


    return (
        <ul>
            <Todos todos={todos} toggleTodo={toggleTodo}/>
        </ul>
    )
}
