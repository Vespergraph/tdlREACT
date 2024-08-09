import React from 'react'

function Todo({todo, toggleItem}) {
    function handleCheck(){
        toggleItem(todo.id)
    }
  return (
    <div> 
        <label>
            <input type="checkbox" checked={todo.complete} onChange={handleCheck}/>
            {todo.name}
        </label>
    </div>
  )
}

export default Todo