import { useState } from "react"
import Form from "./Form"
import { nanoid } from "nanoid"
import Items from "./Items"

const getLocalStorage = () => {
  let list = localStorage.getItem("list")
  if (list) {
    list = JSON.parse(localStorage.getItem("list"))
  } else {
    list = []
  }
  return list
}

const setLocalStorage = (items) => {
  localStorage.setItem("list", JSON.stringify(items))
}

const App = () => {
  const [items, setItems] = useState(getLocalStorage())

  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      completed: false,
      id: nanoid(),
    }
    //array of item will be added to the useState from the newItem object
    //the "...items" will keep the input value from erasing when new values are added to the list.
    const newItems = [...items, newItem] //2 values are passed to newItems as an array.
    console.log(items)

    setItems(newItems)
    setLocalStorage(newItems)
  }
  const removeItem = (itemId) => {
    const newItems = items.filter((item) => item.id !== itemId)
    setItems(newItems)
    setLocalStorage(newItems)
  }

  const editItem = (itemId) => {
    const newItems = items.map((item) => {
      if (item.id === itemId) {
        const newItem = { ...item, completed: !item.completed }
        return newItem
      }
      return item
    })
    setItems(newItems)
    setLocalStorage(newItems)
  }
  return (
    <section className='section-center'>
      <Form addItem={addItem} />
      <Items items={items} removeItem={removeItem} editItem={editItem} />
    </section>
  )
}

export default App
