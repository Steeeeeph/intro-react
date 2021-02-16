import React from 'react';
import Todo from './Todo';

export default function Todos({todos}) {
    return (
        todos.map((todo) => (
            <Todo todo={ todo }/>
        ))
    )
}
