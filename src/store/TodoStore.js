import { makeAutoObservable } from 'mobx'
class Todo{
  todos = [
    {
      id: 1,
      title: "Do homework",
      completed: false
    }
  ]

  oddElement = false
  eventElement = false

  constructor(){
    makeAutoObservable(this)
  }

  oddHighlight(){
    this.oddElement = !this.oddElement
  }

  eventHighlight(){
    this.eventElement = !this.eventElement
  }

  updateTodoItem(id, newTitle){
    const idx = this.todos.findIndex(item => item.id === id)
    if(idx >= 0){
      this.todos[idx] = {...this.todos[idx], title: newTitle}
    }
  }

  addTodoItem(title){
    this.todos.push({ 
      id: Date.now(), 
      title: title,
      completed: false
    })
  }

  removeTodoItem(id){
    this.todos = this.todos.filter((item) => item.id !== id)
  }

  completeTodoItem(id, completed) {
    console.log("ok")
    const idxCompleteItem = this.todos.findIndex(item => item.id === id);
    // check
    if(idxCompleteItem >= 0 && !completed){
      const newItem = {...this.todos[idxCompleteItem], completed: !this.todos[idxCompleteItem].completed}
      this.todos.splice(idxCompleteItem, 1)
      this.todos.push(newItem)
    }
    else{
      this.todos[idxCompleteItem].completed = !this.todos[idxCompleteItem].completed
    }
  }

  deleteFirstItem(){
    this.todos.shift()
  }

  deleteLastItem(){
    this.todos.pop()
  }
}

export default new Todo()