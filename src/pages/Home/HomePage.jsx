import { useEffect, useState } from "react"
import { ToDoForm, ToDoList } from "./components"


const HomePage = () => {
    const [task, setTask] = useState([]);
    const [filter, setFilter] = useState("lefted");
    const onFormSubmitHandler = (todo) => {
        const newTask = {id: task.length + 1, todo, completed: false};
        const newTasks = [newTask, ...task]
        setTask(newTasks);
        localStorage.setItem("tasks", JSON.stringify(newTasks))
    }

    useEffect(() => {
        const task = JSON.parse(localStorage.getItem("tasks")) || [];
        if(task){
            setTask(task);
        }
    }, [])

    // Filtered tasks
    const filteredTasks = filter === "completed"
        ? task.filter(t => t.completed)
        : task.filter(t => !t.completed);

  return (
    <div className="py-10 flex justify-center items-center bg-gradient-to-br from-purple-600 via-blue-500 to-orange-400">
        <div className=" p-5 md:w-[50%] w-[90%] h-auto bg-gray-100 rounded-3xl">
            <div className="flex gap-4">
               <img className="w-10 h-10" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbkuWKnA44LWVk3erfiAHmQdF8U7TaeJAWLw&s" alt="" />
               <h1 className="text-3xl font-semibold">Todo</h1>
            </div>
            <ToDoForm onFormSubmitted={onFormSubmitHandler}/>
            <h2 className="mt-4 text-xl font-semibold">Tasks</h2>
            <div className="bg-gray-100 gap-2 flex w-auto mt-5">
                <button
                    className={`w-[50%] text-blue-500 cursor-pointer py-1 bg-white rounded-md ${filter === "lefted" ? "focus:bg-blue-500 focus:text-white bg-blue-500 text-white" : ""}`}
                    onClick={() => setFilter("lefted")}
                >
                    Lefted
                </button>
                <button
                    className={`w-[50%] text-blue-500 cursor-pointer py-1 bg-white rounded-md ${filter === "completed" ? "focus:bg-blue-500 focus:text-white bg-blue-500 text-white" : ""}`}
                    onClick={() => setFilter("completed")}
                >
                    Completed
                </button>
            </div>
            <ToDoList task={filteredTasks} setTask={setTask}/>

        </div>
    </div>
  )
}

export default HomePage