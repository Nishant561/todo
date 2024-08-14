import React from 'react'

function Button(props) {
  return (
    <>
            <button onClick={ props.delete} data-id={props.id} className={` ${props.color? props.color : 'bg-green-600 '}  px-3 py-1 rounded-r-md text-2xl`}>
                {props.text}
            </button>
    </>
  )
}

export default Button
