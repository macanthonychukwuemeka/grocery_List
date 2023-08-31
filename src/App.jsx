import { useState } from "react"
import Form from "./Form"
import { nanoid } from "nanoid"

const App = () => {
  const [items, setItems] = useState([])

  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      completed: false,
      id: nanoid(),
    }
    //array of item will be added to our list from the newItem func
    setItems([...items, newItem])
  }
  return (
    <section className='section-center'>
      <Form addItem={addItem} />
    </section>
  )
}

export default App
