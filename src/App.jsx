import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Input ,TodoList } from './components/index'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div className='w-screen h-screen bg-black flex justify-center items-center text-white'>
              <div className='w-[65%] flex h-[80%]  flex-col items-center justify-center gap-3  m-auto bg-zinc-500 p-5  rounded-lg'>

                        <h1 className='font-semibold text-3xl'>Todo List</h1>

                        <Input />
                        <TodoList/>

              </div>
        </div>
    
    </>
  )
}

export default App
