import { useState } from "react";
import { Link } from "react-router-dom";
import { useTasks } from "../context/TasksContext";
import dayjs from "dayjs";
import dayjsPluginUTC from 'dayjs-plugin-utc';
import { FaEdit, FaTrashAlt, FaExpand } from 'react-icons/fa'; // Importa los íconos de edición, eliminación y expandir

dayjs.extend(dayjsPluginUTC);

function TaskCard({ task }) {
    const { deleteTask } = useTasks();
    const [expanded, setExpanded] = useState(false);

    const toggleExpand = () => {
        setExpanded(!expanded);
    };

    return (
        <div className="bg-gray-300 max-w-md w-full p-5 rounded-lg shadow-md mb-4 my-4">
            <div className="flex justify-between items-center mb-3">
                <h1 className="text-xl font-bold text-slate-800">{task.title}</h1>
                <div className="flex gap-2">
                    <Link to={`/tasks/${task._id}`} className="text-indigo-500 hover:text-indigo-400">
                        <FaEdit className="mr-1" title="Editar tarea" />
                    </Link>
                    <button
                        onClick={() => deleteTask(task._id)}
                        className="text-red-500 hover:text-red-400 focus:outline-none"
                        title="Eliminar tarea"
                    >
                        <FaTrashAlt className="ml-1" />
                    </button>
                    <button
                        onClick={toggleExpand}
                        className="text-gray-500 hover:text-gray-400 focus:outline-none"
                        title={expanded ? "Ocultar descripción" : "Mostrar descripción"}
                    >
                        <FaExpand className="ml-1" />
                    </button>
                </div>
            </div>
            <div className={`text-sm text-slate-600 mb-5 ${expanded ? 'block' : 'hidden'}`}>
                {task.description}
            </div>
            <p className="text-xs text-slate-600 font-bold ">
                Fecha de creación: {dayjs.utc(task.date).format('DD/MM/YYYY')}
            </p>
        </div>
    );
}

export default TaskCard;
