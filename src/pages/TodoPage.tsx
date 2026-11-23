import TodoForm from "../components/TodoForm"
import TodoItem from "../components/TodoItem"
import { useTodos } from '../hooks/useTodos'

const TodoPage = () => {
  const { todos, addTodo, editTodo, toggleTodo, deleteTodo } = useTodos()


  
  return (
    <>
      <TodoForm onAdd={addTodo} />
      {
        (todos.length >  0) &&<hr className="my-5 border-secondary" />
      }
      <ul className="grid grid-cols-1 gap-3">
        {todos.map((todo) => 
          <TodoItem key={todo.id} todo={todo} onToggle={toggleTodo} onDelete={deleteTodo} />
        )}
      </ul>
    </>
  )
}

export default TodoPage
