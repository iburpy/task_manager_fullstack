import Task from '../models/task.model.js';

export const getTasks = async (req, res) => {
    const tasks = await Task.find({user: req.user.id}).populate('user');// Trae todas las tareas del usuario autenticado ademas con el metodo populate se traen los datos del usuario
    res.json(tasks);
};

export const createTask = async (req, res) => { 
    const {title, description, date} = req.body;
    const newTask = new Task({title, description, date, user: req.user.id});
    const savedTask = await newTask.save();
    res.json(savedTask);
};

// Obtener una tarea por id
export const getTask = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id).populate('user');
        if (!task) {
            return res.status(404).json({ message: 'Tarea no encontrada' });
        }
        res.json(task);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

// Actualizar una tarea por id
export const updateTask = async (req, res) => { 
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {new: true});
    if(!updatedTask) return res.status(404).json({message: 'Tarea no encontrada'});
    res.json(updatedTask);
};

// Eliminar una tarea por id
export const deleteTask = async (req, res) => { 
    const deletedTask = await Task.findByIdAndDelete(req.params.id).populate('user', 'username');// Se agrega el metodo populate para traer el username del usuario al que pertenece la tarea eliminada
    if(!deletedTask) return res.status(404).json({message: 'Tarea no encontrada'});
    return res.sendStatus(204);
};
