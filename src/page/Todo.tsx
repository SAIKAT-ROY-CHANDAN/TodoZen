import TodoContainer from "../components/TodoContainer"
import Container from "../components/ui/Container"

const Todo = () => {
  return (
    <Container>
      <div className="flex items-center gap-x-2 justify-center">
        <img src="./vite.svg" alt="" />
        <h1 className="text-3xl font-bold text-center mb-10 pt-10">TodoZen
        </h1>
      </div>
      <TodoContainer />
    </Container>
  )
}

export default Todo