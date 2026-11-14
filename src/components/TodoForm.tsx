import { useState } from 'react'
import type { SubmitEventHandler } from 'react'

type Props = {
  /** 新增待辦時呼叫，把整理過的文字交給父層處理 */
  onAdd: (text: string) => void
}

const TodoForm = ({ onAdd }: Props) => {
  // 輸入框目前的文字（受控元件：畫面由 state 決定）
  const [text, setText] = useState('')

  // 去掉前後空白後還有內容才算有效，用來停用按鈕和送出前的檢查
  const isValid = text.trim().length > 0

  // 表單送出：點按鈕或在輸入框按 Enter 都會觸發
  const handleSubmit: SubmitEventHandler<HTMLFormElement> = (e) => {
    // 阻止瀏覽器預設的送出行為（重新載入頁面），否則 state 會被清空
    e.preventDefault()
    // 按鈕停用之外的保險，避免只有空白的內容被送出
    if (!isValid) return
    onAdd(text.trim())
    setText('') // 送出後清空輸入框
  }

  return (
    <form className="grid grid-cols-1 gap-2" onSubmit={handleSubmit}>
      <label>
        新增待辦
        <input
          type="text"
          value={text}
          // 使用者輸入時，把輸入框的值同步到 text
          onChange={(e) => setText(e.target.value)}
          placeholder="請輸入待辦名稱"
          required
          className="mt-2 w-full rounded-2xl border border-primary p-2"
        />
      </label>
      <button type="submit" disabled={!isValid} className="btn">
        新增
      </button>
    </form>
  )
}

export default TodoForm
