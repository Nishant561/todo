import React, { createContext, useContext, useEffect, useState } from 'react'
import { get } from 'react-hook-form'

export const todoContext = createContext()

function Utils(props) {

   const getTodos = JSON.parse(localStorage.getItem('todo'))
    const [myTodo , setmyTodo] = useState(getTodos? getTodos : [])


    

  return (
    <todoContext.Provider value={[myTodo , setmyTodo]}>
        {props.children}
    </todoContext.Provider>
  )
}

export default Utils
