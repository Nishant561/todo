import React, { useContext, useState } from 'react'
import {Button, Todos} from './index'
import { todoContext } from '../utils/Utils'

function TodoList() {

    const [myTodo , setmyTodo] = useContext(todoContext)
  return (
    <>
        <div className='w-[70%] flex flex-col gap-2 h-[50%]'>

            {
                myTodo.map((item , i)=>(
                    <Todos key={i} text={item.task} id={item.id} completed={item.completed} />

                ))
            }
        </div>
    </>
  )
}

export default TodoList
