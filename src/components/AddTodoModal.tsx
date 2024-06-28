import { FormEvent, useState } from "react"
import { Button } from "./ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "./ui/dialog"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { useAppDispatch } from "../redux/hooks"
import { addTodo } from "../redux/features/todoSlice"

const AddTodoModal = () => {
    const [task, setTask] = useState('');
    const [description, setDescription] = useState('');
    const dispatch = useAppDispatch()
    

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        const taskDetails = {
            id: Math.random().toString().substring(2, 7),
            title: task,
            description: description
        }
        console.log(taskDetails);
        dispatch(addTodo(taskDetails));
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="default">
                    Add todo
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <form onSubmit={handleSubmit}>
                    <DialogHeader>
                        <DialogTitle>Task Schedule</DialogTitle>
                        <DialogDescription>
                            Create Task that you want to complete.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="task" className="text-right">
                                Task
                            </Label>
                            <Input onBlur={(e) => setTask(e.target.value)} id="task" className="col-span-3" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="description" className="text-right">
                                Description
                            </Label>
                            <Input onBlur={(e) => setDescription(e.target.value)} id="description" className="col-span-3" />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="submit">Create Task</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}

export default AddTodoModal