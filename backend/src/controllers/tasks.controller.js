import Task from '../models/task.model.js';

export const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find({user: req.user.id}).populate('user');// Trae todas las tareas del usuario autenticado ademas con el metodo populate se traen los datos del usuario
        return res.json(tasks);
    } catch (error) {
        return res.status(500).json({message: 'Error al obtener las tareas'});
    }
};

export const createTask = async (req, res) => { 
    try {
        const {title, description, date} = req.body;
        const newTask = new Task({title, description, date, user: req.user.id});
        const savedTask = await newTask.save();
        return res.json(savedTask);
    } catch (error) {
        return res.status(500).json({message: 'Error al crear la tarea'});
    }
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
        res.status(500).json({ 'Error al obtener la tarea': error.message });
    }
};

// Actualizar una tarea por id
export const updateTask = async (req, res) => { 
    try {
        const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if(!updatedTask) return res.status(404).json({message: 'Tarea no encontrada'});
        
        res.json(updatedTask);
    } catch (error) {
        return res.status(500).json({message: 'Error al actualizar la tarea'});
    }
};

// Eliminar una tarea por id
export const deleteTask = async (req, res) => { 
    try {
        const deletedTask = await Task.findByIdAndDelete(req.params.id).populate('user', 'username');// Se agrega el metodo populate para traer el username del usuario al que pertenece la tarea eliminada
        if(!deletedTask) return res.status(404).json({message: 'Tarea no encontrada'});
        return res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({message: 'Error al eliminar la tarea'});
    }
};
