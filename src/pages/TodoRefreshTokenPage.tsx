import { useCallback, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useDeleteTodo, useGetToDoList, usePatchTodoCheck, usePostTodo } from '@/api/hooks/todo-refresh-token'
import ProgressBar from '@/components/custom/ProgressBar'
import ToDoItem from '@/components/custom/ToDoItem'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import useEvent from '@/lib/useEvent'

type Status = 'empty' | 'warning'
const config: Record<Status, { placeholder: string; color: string }> = {
  warning: { placeholder: '일을 작성해야합니다!!!', color: '#FF5F57' },
  empty: { placeholder: '할 일을 작성해보세요!', color: '#DADADA' }
}

const TodoRefreshTokenPage = () => {
  const [newTodo, setNewTodo] = useState('')
  const list = useGetToDoList().data ?? []
  const { mutate: mutateTodo } = usePostTodo()
  const { mutate: mutateCheck } = usePatchTodoCheck()
  const { mutate: mutateDelete } = useDeleteTodo()
  const [status, setStatus] = useState<Status>('empty')

  const progress = list.length > 0 ? Math.floor((list.filter(todo => todo.isChecked).length / list.length) * 100) : 0

  const handleAddTodo = useCallback(() => {
    if (newTodo === '') return setStatus('warning')
    mutateTodo(newTodo, {
      onSuccess: () => {
        setNewTodo('')
        setStatus('empty')
      }
    })
  }, [newTodo, mutateTodo])

  const handleCheck = useEvent((id: number) => {
    const current = list.find(todo => todo.id === id)?.isChecked ?? false
    mutateCheck({ id, isChecked: !current })
  })
  const handleDelete = useCallback((id: number) => mutateDelete(id), [mutateDelete])

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
            className={`flex self-stretch justify-center items-center rounded-[10px] shadow border border-[${config[status].color}]`}
            type="text"
            placeholder={config[status].placeholder}
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
        {list.map(todo => (
          <ToDoItem
            key={todo.id}
            id={todo.id}
            isChecked={todo.isChecked}
            content={todo.content}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  )
}

export default TodoRefreshTokenPage
