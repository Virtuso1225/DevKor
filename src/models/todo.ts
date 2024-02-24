export interface ToDo {
  id: number
  content: string
  isChecked: 'true' | 'false'
}
export interface ToDoContainerProps extends Omit<ToDo, 'isChecked'> {
  isChecked: boolean
  handlCheck: (id: number) => void
  handleDelete: (id: number) => void
}
