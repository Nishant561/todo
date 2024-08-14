import React, { useContext, useEffect, useState } from 'react'
import {nanoid} from 'nanoid'
import {Button} from './index'
import { todoContext } from '../utils/Utils'

function Input() {
    const [completed , setCompleted] = useState(false)
    const [todo , setTodo] = useState('')
    const [myTodo , setmyTodo]= useContext(todoContext)
    
    const formHandler = (e)=>{
            
            e.preventDefault()

            if(todo === '' || todo.trim().length <0) {
                alert('Please Enter Your Task')
                return ;
            }


            const data = {
                id: nanoid(),
                task: todo,
                completed: completed,
            }

            setmyTodo([...myTodo , data])
            setTodo('')
    }

    useEffect(()=>{
        localStorage.setItem('todo' , JSON.stringify(myTodo))
    },[myTodo])

  return (
    <>
            <form className='w-[70%] justify-center flex   ' onSubmit={formHandler}>
                <input type='text' 
                        value={todo}
                        placeholder='Enter Your Task'
                        onChange={(e)=> setTodo(e.target.value)}
                        className='w-[85%]  text-2xl rounded-md rounded-r-none px-2 py-1 text-black' />

                         <Button text='Add' />
                
            </form>
    </>
  )
}

export default Input
