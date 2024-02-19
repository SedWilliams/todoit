import { dummyData } from "./data/TodoData"
import TodoItem from "./components/TodoItem"
import { useState } from "react"
import AddTodoForm from "./components/AddTodoForm";


function App() {

  const [todos, setTodos] = useState(dummyData);

  function onTodoCompleted(id: number, completed: boolean) {
    setTodos((prevTodos) => (
      prevTodos.map((todo) => (
        todo.id === id ? { ...todo, completed} : todo
      ))
    ));
  }

  function addTodo(input: string) {
    setTodos((prevTodos) => ([
      {
        id: todos.length + 1,
        title: input,
        completed: false,
      },
      ...prevTodos
    ]))

    console.log(todos);
  }

  return (
    <div className="flex justify-center">
      <main className="bg-gray-500 w-11/12 ">
        <h1 className='py-10 font-bold text-3xl text-center bg-gray-400'>TODO: List</h1>
        <AddTodoForm onSubmit={addTodo}/>
        <div className="max-w-lg mx-auto p-5">
          <div className="space-y-5 p-5 bg-gray-400">
            {todos.map(Todo => (
              <TodoItem Todo={Todo} onCompletedChange={onTodoCompleted} key={Todo.id}/>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

export default App;
