import { RiEditCircleLine } from "react-icons/ri";
import { Button } from "./ui/button"
import { FiMinus } from "react-icons/fi";
import { useAppDispatch } from "../redux/hooks";
import { removeTodo } from "../redux/features/todoSlice";

interface IProps {
  id: string
  title: string
  description: string
}

const TodoCard = ({ title, description, id }: IProps) => {
  const dispatch = useAppDispatch()

  return (
    <div>
      <div className="rounded-md bg-gray-200/20 flex justify-between items-center border p-2">
        <input type="checkbox" />
        <p className="font-semibold">{title}</p>
        <p>Time</p>
        <p>{description}</p>
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