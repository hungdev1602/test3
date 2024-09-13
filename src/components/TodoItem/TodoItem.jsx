/* eslint-disable react/prop-types */
import TodoStore from "../../store/TodoStore";
const TodoItem = ({ id, title, completed, oddHighlight, eventHighlight, updateTodoList }) => {
  return (
    <>
      <li 
        className={"w-[500px] mx-auto flex justify-between py-[20px] mb-[20px] " + 
          (completed === true ? "bg-red-500 line-through " : "bg-white ") +
          (oddHighlight ? "text-purple-950 font-[900]" : eventHighlight ? "text-orange-700 font-[900]" : "")
        }
      >
        <h2 className="flex-1 pl-[10px] line-clamp-2">{title}</h2>
        <div className=""> 
          <button 
            onClick={() => updateTodoList(id)}
            className={"text-white bg-red-500 px-[3px] mr-[15px] hover:bg-blue-400"}
          >
            Edit
          </button>
          <button 
            onClick={() => TodoStore.completeTodoItem(id, completed)}
            className={"text-white bg-red-500 px-[3px] mr-[15px] hover:bg-blue-400"}
          >
            {completed ? "Undo" : "Complete"}
          </button>
          <button 
            onClick={() => TodoStore.removeTodoItem(id)}
            className="bg-red-500 text-white px-[3px] mr-[15px] hover:bg-blue-400"
          >
            X
          </button>
        </div>
      </li>
    </>
  )
}

export default TodoItem