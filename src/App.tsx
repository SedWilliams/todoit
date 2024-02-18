import { dummyData } from "./data/TodoData"
import TodoItem from "./components/TodoItem"


function App() {

  return (
    <div className="flex justify-center">
      <main className="bg-gray-500 w-11/12 ">
        <h1 className='py-10 font-bold text-3xl text-center bg-gray-400'>TODO: List</h1>
        <div className="max-w-lg mx-auto p-5">
          <div className="space-y-5 p-5 bg-gray-400">
            {dummyData.map(Todo => (
              <TodoItem Todo={Todo}/>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

export default App;
