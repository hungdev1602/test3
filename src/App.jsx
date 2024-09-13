import { observer } from "mobx-react-lite";
import TodoList from "./components/TodoList/TodoList";
import InputTodo from "./components/InputTodo/InputTodo";
function App() {

  return (
    <>
      <div className="bg-[#007EFF] h-[100vh]">
        <InputTodo/>

        <TodoList/>
      </div>
    </>
  )
}

export default observer(App)
