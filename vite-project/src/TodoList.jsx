import React from 'react'
import Todo from './Todo'

export default function TodoList({todos , toggleItem}) {
  return (
    todos.map(todo => {
        return <Todo key={todo.id} toggleItem={toggleItem} todo={todo}/>
    })
  )
}