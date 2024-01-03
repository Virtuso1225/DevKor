import { Checkbox } from '@/components/ui/checkbox'
import type { ToDoContainerProps } from '@/models/todo'
import { Cross1Icon } from '@radix-ui/react-icons'

const ToDoItem = ({ id, isChecked, content, handlCheck, handleDelete }: ToDoContainerProps) => {
  return (
    <div className="flex flex-row w-[393px] justify-between items-center rounded-[10px] shadow border py-[15px] px-[32px]">
      <div className="flex flex-row justify-start items-center gap-[20px] ">
        <Checkbox
          checked={isChecked === 0 ? false : true}
          className="border-[#DADADA] size-[20px]"
          onClick={() => handlCheck(id)}
        />
        <p className="text-[15px] font-medium text-[#1E1E1E]">{content}</p>
      </div>
      <div
        className="flex w-[18px] h-[18px] justify-center items-center cursor-pointer bg-[#FF5F57] rounded-[10px]"
        onClick={() => handleDelete(id)}
      >
        <Cross1Icon className="size-[10px] stroke-[#fafafa] stroke-[1px]" />
      </div>
    </div>
  )
}

export default ToDoItem
