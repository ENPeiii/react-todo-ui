import { useEffect, useState } from 'react'
import type { Todo } from '../types/todo'

const STORAGE_KEY = 'todos'

/** 從 localStorage 讀取待辦，沒有資料或格式錯誤時回傳空陣列 */
const loadTodos = (): Todo[] => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (!saved) return []
    const parsed: unknown = JSON.parse(saved)
    return Array.isArray(parsed) ? (parsed as Todo[]) : []
  } catch {
    return []
  }
}

export const useTodos = () => {
  // 傳函式給 useState：只在第一次渲染時讀取 localStorage
  const [todos, setTodos] = useState<Todo[]>(loadTodos)

  // todos 有變動就存回 localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
    } catch {
      // 無痕模式或容量已滿時可能寫入失敗，不影響畫面運作
    }
  }, [todos])

  const addTodo = (title: string) => {
    const newTodo: Todo = { id: Date.now(), title, done: false }
    setTodos((prev) => [...prev, newTodo])
  }

  const editTodo = (id: number, title: string) => {
    const trimmed = title.trim()
    if (!trimmed) return
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, title: trimmed } : todo))
    )
  }

  const toggleTodo = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo))
    )
  }

  const deleteTodo = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  return { todos, addTodo, editTodo, toggleTodo, deleteTodo }
}
