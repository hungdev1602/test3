import { observer } from "mobx-react-lite";
import TodoList from "./components/TodoList/TodoList";
import InputTodo from "./components/InputTodo/InputTodo";
function App() {

  return (
    <>
      <div className="">
        <InputTodo/>

        <TodoList/>
      </div>
    </>
  )
}

export default observer(App)
