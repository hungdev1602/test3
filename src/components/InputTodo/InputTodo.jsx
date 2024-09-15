/* eslint-disable react/prop-types */
import { useState } from "react"
import TodoStore from "../../store/TodoStore";
const InputTodo = () => {
  const [inputValue, setInputValue] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    if(!inputValue){
      alert("U must write something")
    }
    else{
      TodoStore.addTodoItem(inputValue)
      setInputValue('')
    }
  }

  return (
    <>
      <div className="py-[30px] w-[400px] sm:w-[500px] mx-auto">
        <div className="mx-auto text-center text-[25px]">To Do List test 3</div>
        <form className="flex items-center gap-[20px] mt-[20px] mb-[20px]" onSubmit={handleSubmit}>
          <input 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            type="text" 
            placeholder="title..."
            className="w-full outline-none inline-block pl-[10px] py-[10px] rounded-[5px]"
          />
          <button 
            className="px-[20px] py-[10px] bg-red-500 rounded-[5px] text-white"
          >
            Добавить
          </button>
        </form>
        <div className="mb-[15px]">
          <button 
            onClick={() => TodoStore.eventHighlight()}
            className="px-[20px] py-[10px] bg-red-500 text-white rounded-[5px] mr-[20px] hover:bg-red-900"
          >
            Четный элемент
          </button>
          <button 
            onClick={() => TodoStore.oddHighlight()}
            className="px-[20px] py-[10px] bg-red-500 text-white rounded-[5px] hover:bg-red-900"
          >
            Нечетный элемент
          </button>
        </div>
        <div className="">
          <button 
            onClick={() => TodoStore.deleteFirstItem()}
            className="px-[20px] py-[10px] bg-red-500 text-white rounded-[5px] mr-[20px] hover:bg-red-900"
          >
            Удалить Первый элемент
          </button>
          <button 
            onClick={() => TodoStore.deleteLastItem()}
            className="px-[20px] py-[10px] bg-red-500 text-white rounded-[5px] hover:bg-red-900"
          >
            Удалить последний элемент
          </button>
        </div>
      </div>
    </>
  )
}

export default InputTodo