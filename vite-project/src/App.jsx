import { useState , useRef , useEffect} from 'react'
import TodoList from './TodoList'
import { v4 as uuidv4 } from 'uuid';

const LOCAL_STORAGE_KEY = 'KEY'

function App() {
  const [items, setItems] = useState([])
  const todoNameRef = useRef()

  useEffect(() =>{
    const storedItems = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if(storedItems) setItems(storedItems)
  },[])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(items))
  },[items])

  function toggleItem(id){
    const newList = [...items]
    const item = newList.find(item => item.id === id)
    item.complete = !item.complete
    setItems(newList)
  }

  function handleAdd(){
    const name = todoNameRef.current.value 
    if(name === '') return 
    console.log(name)
    setItems(prevItems =>{
      return [...prevItems,{id : uuidv4(),name:name ,complete:false} ]
    })
    todoNameRef.current.value = null
  }

  function handleClearChecked(){
    const newList = items.filter(item => !item.complete)
    setItems(newList)
  }

  return (
    <>
   <TodoList todos= {items} toggleItem = {toggleItem}/>
   <input ref={todoNameRef} type="text" />
   <button onClick={handleAdd}>Add to List</button>
   <button onClick={handleClearChecked}> Clear Completed</button>
   <div> {items.filter(item => !item.complete).length} left to do</div>
   </>
  )
}

export default App
