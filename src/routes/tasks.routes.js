import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import { getTasks, getTask, createTask, updateTask, deleteTask } from "../controllers/tasks.controller.js";
import { validate } from "../middlewares/validator.middleware.js";
import {createTaskSchema} from '../schemas/task.schema.js'
const router = Router();

router.get("/tasks", authRequired, getTasks); // Obtener todas las tareas
router.get("/tasks/:id", authRequired, getTask); // Obtener una tarea por id
router.post("/tasks", authRequired,validate(createTaskSchema),createTask); // Crear una nueva tarea
router.put("/tasks/:id", authRequired, updateTask); // Actualizar una tarea por id
router.delete("/tasks/:id", authRequired, deleteTask); // Eliminar una tarea por id

export default router;
