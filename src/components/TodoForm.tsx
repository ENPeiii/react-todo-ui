import { useState } from 'react'
import type { SubmitEventHandler } from 'react'
type Props = {
  onAdd: (text: string) => void
}
const TodoForm = ({ onAdd }: Props) => {
  const [text, setText] = useState('')
  const isValid = text.trim().length > 0

  const handleSubmit: SubmitEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    if (!isValid) return
    onAdd(text.trim()) // 把值交給父層
    setText('')
  }


  return (
    <form className="grid grid-cols-1 gap-2" onSubmit={handleSubmit}>
      <label>
        新增待辦
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="請輸入待辦名稱"
          required
          className="mt-2 w-full rounded-2xl border border-primary p-2"
        />
      </label>
      <button type="submit" disabled={!isValid} className='btn'>
        新增
      </button>
    </form>
  )
}

export default TodoForm
