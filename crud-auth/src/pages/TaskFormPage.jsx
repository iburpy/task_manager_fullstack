import { useForm } from "react-hook-form";
import { useTasks } from "../context/TasksContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { FaRegCalendarCheck, FaClipboardCheck, FaPen, FaSave } from 'react-icons/fa'; // Importa los íconos necesarios
import dayjs from "dayjs";
import dayjsPluginUTC from 'dayjs-plugin-utc';

dayjs.extend(dayjsPluginUTC);

function TaskFormPage() {
    const { register, handleSubmit, setValue } = useForm();
    const { createTask, getTask, updateTask } = useTasks();
    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        async function loadTask() {
            if(params.id) {
                const task = await getTask(params.id);
                console.log(task);
                setValue("title", task.title);
                setValue("description", task.description);
            }
        }
        loadTask();
    }, []);

    const onSubmit = handleSubmit((data) => {
        if(params.id) {
            updateTask(params.id, {
                ...data,
                date: dayjs(data.date).utcOffset(-300).format('YYYY-MM-DDTHH:mm:ss[Z]'),
            });
        } else {
            createTask({
                ...data,
                date: dayjs(data.date).utcOffset(-300).format('YYYY-MM-DDTHH:mm:ss[Z]'),
            });
        }
        navigate("/tasks");
    });

    return (
        <div className="flex items-center justify-center">
            <div className="bg-gray-200 shadow-md max-w-md w-full p-10 rounded-md my-4">
                <form onSubmit={onSubmit} className="space-y-5">
                    <div className="flex items-center mb-4">
                        <input 
                            type="text"
                            placeholder="¿De qué trata tu tarea?" 
                            { ...register("title")}
                            autoFocus="true"
                            className="w-full bg-zinc-300 text-black px-4 py-2 rounded-md"
                        />
                    </div>
                    <div className="flex items-center mb-4">
                        <textarea 
                            rows="5"
                            placeholder="Añade detalles a tu tarea"
                            {...register("description")}
                            className="w-full bg-zinc-300 text-black px-4 py-2 rounded-md"
                        />
                    </div>
                    <div className="flex items-center mb-4">
                        <input 
                            type="date"
                            {...register("date")}
                            className="w-full bg-zinc-300 text-black px-4 py-2 rounded-md"
                        />
                    </div>
                    <div className="flex items-center mb-4">
                     <button className="w-full bg-indigo-500 text-white px-4 py-2 rounded-md">Guardar</button>
                    </div>
                   
                </form>
            </div>
        </div>
    )
}

export default TaskFormPage;
