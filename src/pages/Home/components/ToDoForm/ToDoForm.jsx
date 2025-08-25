import { useState } from "react"


const ToDoForm = ({onFormSubmitted}) => {
    const [todo, setTodo] = useState("")

   const handleChange = (e) => {
    setTodo(e.target.value);
   };

   const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.trim() === "") {
      return;
    }
    onFormSubmitted(todo);
    console.log("Submitted ToDo:", todo);
    setTodo("");
   }

  return (
    <>
    <div className="flex justify-center p-4">
      <form onSubmit={handleSubmit} className="flex w-full max-w-md items-center gap-2 bg-white shadow-md rounded-2xl p-3">
        <input
          value={todo}
          onChange={handleChange}
          type="text"
          placeholder="Enter a task..."
          className="flex-1 px-4 py-2 border rounded-xl outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition"
        >
          Add
        </button>
      </form>
 </div>
    </>
  )
}

export default ToDoForm