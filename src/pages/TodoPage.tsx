
import { useState } from "react"
import TodoForm from "../components/TodoForm"
import TodoItem from "../components/TodoItem"
import type { Todo } from "../types/todo"


const TodoPage = () => {
  const addTodo = (title: string) => {
    const newTodo:Todo = {
      id: todoList.length + 1,
      title: title,
      done: false
    }
    setTodoList((prev) => [...prev, newTodo])  
  }

  const [todoList, setTodoList] = useState<Todo[]>([
    {
      id: 1,
      title: '項目一',
      done: true
    },
    {
      id: 2,
      title: '項目二',
      done: false
    }
  ])

  const toggleTodo = (id: number) => {
    setTodoList((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    )
  }
  const deleteTodo = (id: number) => {
    setTodoList((prev) => prev.filter((todo) => todo.id !== id))
  }
  
  
  return (
    <>
      <TodoForm onAdd={addTodo} />
      <hr className="my-5 border-secondary" />
      <ul className="grid grid-cols-1 gap-3">
        {todoList.map((todo) => 
          <TodoItem key={todo.id} todo={todo} onToggle={toggleTodo} onDelete={deleteTodo} />
        )}
      </ul>
    </>
  )
}

export default TodoPage
