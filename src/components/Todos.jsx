import React, { useContext, useEffect, useState } from 'react';
import Button from './Button';
import { todoContext } from '../utils/Utils';

function Todos(props) {
    const [myTodo, setmyTodo] = useContext(todoContext);

    const deleteHandler = (e)=>{
        const data = myTodo.filter((items)=> e.currentTarget.dataset.id !== items.id )
        setmyTodo(data)
}

    const handleComplete = (id) => {
        setmyTodo(prevTodos =>
            prevTodos.map(item =>
                item.id === id ? { ...item, completed: !item.completed } : item
            )
        );
    };

    useEffect(() => {
        localStorage.setItem('todo', JSON.stringify(myTodo));
    }, [myTodo]);

    return (
        <>
            <div className='flex items-center'>
                <input
                    type='checkbox'
                    checked={props.completed}
                    className='w-[19px] mr-2 h-[19px]'
                    onChange={() => handleComplete(props.id)}
                />
                <input
                    type='text'
                    value={props.text}
                    disabled
                    className={`${props.completed ? 'line-through text-green-400' : 'text-black'} w-[85%] text-2xl rounded-md rounded-r-none px-2 py-1`}
                />
                <Button
                    text='Delete'
                    id={props.id}
                    delete={deleteHandler}
                    color='bg-red-600'
                />
            </div>
        </>
    );
}

export default Todos;
