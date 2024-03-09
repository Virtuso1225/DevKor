import { useDeleteTodo, useGetToDoList, usePatchTodoCheck, usePostTodo } from '@/api/hooks/toDoRefreshToken'
import ProgressBar from '@/components/custom/ProgressBar'
import ToDoItem from '@/components/custom/ToDoItem'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

import { useCallback, useLayoutEffect, useRef, useState } from 'react'
import { Helmet } from 'react-helmet-async'

const TodoRefreshTokenPage = () => {
  const [placeholderText, setPlaceholderText] = useState('할 일을 작성해보세요!')
  const [borderColor, setBorderColor] = useState('#DADADA')
  const [newTodo, setNewTodo] = useState('')
  const todoList = useGetToDoList().data ?? []
  const { mutate: mutateTodo } = usePostTodo()
  const { mutate: mutateCheck } = usePatchTodoCheck()
  const { mutate: mutateDelete } = useDeleteTodo()

  const progress =
    todoList.length > 0 ? Math.floor((todoList.filter(todo => todo.isChecked).length / todoList.length) * 100) : 0

  const handleAddTodo = useCallback(() => {
    if (newTodo === '') {
      setPlaceholderText('일을 작성해야합니다!!!')
      setBorderColor('#FF5F57')
      return
    }
    mutateTodo(newTodo, { onSuccess: () => setNewTodo('') })
    setPlaceholderText('할 일을 작성해보세요!')
    setBorderColor('#DADADA')
  }, [newTodo, mutateTodo])

  const fn = (id: number) => {
    const current = todoList.find(todo => todo.id === id)?.isChecked ?? false
    mutateCheck({ id, isChecked: !current })
  }

  const ref = useRef(fn)
  useLayoutEffect(() => void (ref.current = fn))
  const handleCheck = useCallback((id: number) => ref.current(id), [])

  const handleDelete = useCallback(
    (id: number) => {
      mutateDelete(id)
    },
    [mutateDelete]
  )

  return (
    <div className="flex flex-col justify-center items-center mt-[40px]">
      <Helmet>
        <title>TodoRefreshTokenPage</title>
      </Helmet>
      <div className="flex flex-col justify-center items-center gap-[20px]">
        <div className="flex w-[393px] justify-center items-center rounded-[10px] shadow border py-[15px]">
          <h4 className="text-xl font-bold">TODO LIST</h4>
        </div>
        <ProgressBar progress={progress} />
        <div className="flex flex-row gap-[20px] w-[393px]">
          <Input
            className={`flex self-stretch justify-center items-center rounded-[10px] shadow border border-[${borderColor}]`}
            type="text"
            placeholder={placeholderText}
            value={newTodo}
            onChange={e => setNewTodo(e.target.value)}
            onKeyDown={e => e.nativeEvent.isComposing === false && e.key === 'Enter' && handleAddTodo()}
          />
          <Button
            className="flex w-[100px] justify-center items-center rounded-[10px]"
            type="button"
            onClick={handleAddTodo}
          >
            추가하기
          </Button>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-[10px] mt-[20px]">
        {todoList.map(todo => (
          <ToDoItem
            key={todo.id}
            id={todo.id}
            isChecked={todo.isChecked}
            content={todo.content}
            handlCheck={handleCheck}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  )
}

export default TodoRefreshTokenPage
