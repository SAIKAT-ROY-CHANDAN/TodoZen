import { RiEditCircleLine } from "react-icons/ri";
import { Button } from "./ui/button"
import { FiMinus } from "react-icons/fi";
import { useAppDispatch } from "../redux/hooks";
import { removeTodo, toggleComplete } from "../redux/features/todoSlice";

interface IProps {
  id: string
  title: string
  description: string
  isCompleted?: boolean
}

const TodoCard = ({ title, isCompleted, description, id }: IProps) => {
  const dispatch = useAppDispatch()

  const toggleState = () => {
    dispatch(toggleComplete(id))
  }

  return (
    <div>
      <div className="rounded-md bg-gray-200/20 flex justify-between items-center border p-2">
        <input onChange={toggleState} className="mr-3" type="checkbox" name="complete" id="complete" />
        <p className="font-semibold flex-1">{title}</p>
        <p className={isCompleted ? 'text-green-500 flex-1' : 'text-red-500 flex-1'}>{isCompleted ? 'Done' : 'Pending'}</p>
        <p className="flex-[2]">{description}</p>
        <div className="space-x-4">
          <Button
            onClick={() => dispatch(removeTodo(id))} variant='destructive'>
            <FiMinus size={20} />
          </Button>
          <Button>
            <RiEditCircleLine size={20} />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default TodoCard