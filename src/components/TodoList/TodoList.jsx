/* eslint-disable react/prop-types */
import { observer } from "mobx-react-lite";
import TodoStore from "../../store/TodoStore";
import TodoItem from "../TodoItem/TodoItem";
import { useState } from "react";
const TodoList = () => {
  const [updateTodo, setUpdateTodo] = useState(false)
  const [value, setValue] = useState('')
  const [updateId, setUpdateId] = useState(null)

  const updateTodoList = (id) => {
    setUpdateTodo(prev => !prev)
    const element = TodoStore.todos.find(item => item.id === id)
    setValue(element.title)
    setUpdateId(id)
  }

  const handleSubmitUpdate = (e) => {
    e.preventDefault()
    TodoStore.updateTodoItem(updateId, value)
    setValue("")
    setUpdateTodo(false)
  }


  return (
    <>
      {/* Todo List */}
      {updateTodo && 
        <form className="text-center" onSubmit={handleSubmitUpdate}>
          <label htmlFor="">Update Todo</label> <br />
          <input type="text" className="outline-none" value={value} onChange={(e) => setValue(e.target.value)}/>
          <button className="bg-red-500 ml-[20px] px-[10px]">Update</button>
          <button className="bg-red-500 ml-[20px] px-[10px]" onClick={() => setUpdateTodo(prev => !prev)}>X</button>
        </form>
      }
      <ul className="w-full mt-[30px]">
        {TodoStore.todos.map((item, index) => (
          <TodoItem 
            key={item.id}
            id={item.id}
            title={item.title}
            completed={item.completed}
            oddHighlight={TodoStore.oddElement && (index + 1) % 2 === 1}
            eventHighlight={TodoStore.eventElement && (index + 1) % 2 === 0}
            updateTodoList={updateTodoList}
          />
        ))}
      </ul>
    </>
  )
}

export default observer(TodoList)