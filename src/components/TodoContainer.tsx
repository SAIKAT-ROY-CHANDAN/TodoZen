import { useAppSelector } from "../redux/hooks"
import AddTodoModal from "./AddTodoModal"
import TodoCard from "./TodoCard"
import TodoFilter from "./TodoFilter"


const TodoContainer = () => {

  const { todos } = useAppSelector((state) => state.todos)

  return (
    <div>
      <div className="space-x-2 flex justify-between mb-2">
        <AddTodoModal />
        <TodoFilter />
      </div>
      <div className="bg-primary w-full h-full rounded-lg space-y-3 p-[2px]">
        <div className="bg-gray-50 rounded-lg">
          {
            todos.map(({title, description, id}) => (
              <TodoCard key={id} id={id} title={title} description={description} />
            ))
          }
        </div>
        {/* <div className="p-5 flex justify-center items-center rounded-md border text-2xl font-semibold">
          <p>There is no task pending</p>
        </div> */}
      </div>
    </div>
  )
}

export default TodoContainer