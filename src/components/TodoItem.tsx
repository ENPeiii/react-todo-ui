import type { Todo } from "../types/todo"

type Props = {
  todo:Todo // 使用 type 做型別定義的參數
  onToggle: (id: number) => void
  onDelete: (id: number) => void
}

const TodoItem = ( { todo, onToggle, onDelete } : Props) => {
  return (
    <li className={`flex justify-between items-center border p-3 rounded-2xl border-primary bg-primary/30 ${!todo.done ? 'opacity-100' : 'opacity-10' } `}>
      <p>{todo.title}</p>
      <button type="button" className="mr-auto ml-3 icon" onClick={()=> onToggle(todo.id)}>編輯</button>
      <button type="button" disabled={todo.done}  className="icon" onClick={()=> onDelete(todo.id)}>刪除</button>
    </li>
  )
}

export default TodoItem