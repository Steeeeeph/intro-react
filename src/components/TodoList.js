import React , { useEffect } from 'react';
import Todos from './Todos';


export default function TodoList({todos, setTodos, lsKey}) {

    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem(lsKey));
        console.log(storedTodos);
        // TODO check empty storage
        if (storedTodos != null){
            return setTodos(storedTodos);
        }
    }, []);

    // storing todos in local storage
    useEffect(() => {
        localStorage.setItem(lsKey, JSON.stringify(todos))
    }, todos);


    return (
        <ul>
            <Todos todos={todos} setTodos={setTodos} />
        </ul>
    )
}
