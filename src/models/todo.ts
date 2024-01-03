export interface ToDo {
  id: number
  content: string
  isChecked: 1 | 0
}
export interface ToDoContainerProps extends ToDo {
  handlCheck: (id: number) => void
  handleDelete: (id: number) => void
}
