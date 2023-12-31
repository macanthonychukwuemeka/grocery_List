import { useState } from "react"

const Form = ({ addItem }) => {
  const [newItemName, setNewItemName] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(newItemName)
    //if there are no message, the value will return an empty string
    if (!newItemName) return //empty string

    //if there was a message the below functions will get Executed
    addItem(newItemName)

    //clean up the form and get it ready for another input by setting the setnewItem to empty string
    setNewItemName("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <h4>grocery bud</h4>
      <div className='form-control'>
        <input
          type='text'
          className='form-input'
          value={newItemName}
          onChange={(event) => setNewItemName(event.target.value)}
        />
        <button type='submit' className='btn'>
          add item
        </button>
      </div>
    </form>
  )
}
export default Form
