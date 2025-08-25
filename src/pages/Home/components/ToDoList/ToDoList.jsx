import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlineEdit } from "react-icons/md";



const ToDoList = ({task, setTask}) => {
    const handleChange = (id) => {
        const taskIndex = task.findIndex((tsk) => tsk.id === id);
        if(taskIndex === -1){
            console.log("Not Found");
            alert("Task Not Found");
            return;
        }
        const newTasks = [...task];
        newTasks[taskIndex].completed = !newTasks[taskIndex].completed;
        setTask(newTasks);
        localStorage.setItem("tasks", JSON.stringify(newTasks));
    };

   const handleEdit = (id) => {
        const taskIndex = task.findIndex((tsk) => tsk.id === id);
        if(taskIndex === -1){
            alert("Task Not Found");
            return;
        }
        const newTitle = prompt("Edit your task:", task[taskIndex].todo);
        if(newTitle && newTitle.trim() !== ""){
            const newTasks = [...task];
            newTasks[taskIndex].todo = newTitle.trim();
            setTask(newTasks);
            localStorage.setItem("tasks", JSON.stringify(newTasks));
        }
    };
    
    const handleDelete = (id) => {
        const newTasks = task.filter((tsk) => tsk.id !== id);
        setTask(newTasks);
        localStorage.setItem("tasks", JSON.stringify(newTasks))
    }
    

    return (
        <>
            {task && task.length > 0 ? (
                task.map((tsk) => (
                    <div key={tsk.id} className="flex justify-between bg-white p-4 rounded-md mt-8">
                        <div className="flex gap-5 items-center">
                            <input
                                type="checkbox"
                                className="cursor-pointer"
                                checked={tsk.completed}
                                onChange={() => handleChange(tsk.id)}
                            />
                            <p style={{ textDecoration: tsk.completed ? 'line-through' : 'none' }}>{tsk.todo}</p>
                        </div>
                        <div className="flex gap-5">
                            <MdOutlineEdit className="cursor-pointer h-5 w-5 text-blue-500" onClick={() => handleEdit(tsk.id)} />
                            <RiDeleteBin6Line className=" cursor-pointer h-5 w-5 text-red-600" onClick={() => handleDelete(tsk.id)} />
                        </div>
                    </div>
                ))
            ) : (
                <p className="text-center mt-8">No tasks found.</p>
            )}
        </>
    );
}

export default ToDoList