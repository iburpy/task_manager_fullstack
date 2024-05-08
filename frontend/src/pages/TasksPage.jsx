import { useEffect } from "react";
import { useTasks } from "../context/TasksContext";
import TaskCard from "../components/TaskCard";
import { ImFileEmpty } from "react-icons/im";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

function TasksPage() {
  const { tasks, getTasks } = useTasks();

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <>
      {tasks.length === 0 && (
        <div className="flex justify-center items-center p-5 md:p-10">
          <div className="bg-gray-200 rounded-lg p-4 md:p-6 shadow-md text-center">
            <ImFileEmpty className="text-4xl md:text-6xl text-gray-400 m-auto my-2" />
            <h1 className="font-bold text-lg md:text-xl">
              ¡Aún no tienes tareas! Crea una nueva 
              <Link to="/tasks/new" className="text-indigo-500 flex items-center mt-2">
                <FaPlus className="mr-1" /> Crear tarea
              </Link>
            </h1>
          </div>
        </div>
      )}

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2">
        {tasks.map((task) => (
          <TaskCard task={task} key={task._id} />
        ))}
      </div>
    </>
  );
}

export default TasksPage;
