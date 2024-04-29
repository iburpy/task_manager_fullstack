// auth.routes.js

import { Router } from "express";
import { login, register, logout, profile } from '../controllers/auth.controller.js';
import { authRequired } from "../middlewares/validateToken.js";
import { validate } from "../middlewares/validator.middleware.js";
import { loginSchema, registerSchema } from "../schemas/auth.schema.js";

const router = Router();

// Rutas de autenticación
router.post('/register', validate(registerSchema), register); // Registro de usuarios
router.post('/login', validate(loginSchema), login); // Inicio de sesión
router.post('/logout', logout);  // Cierre de sesión

// Ruta protegida para obtener el perfil del usuario
router.get('/profile', authRequired, profile);

export default router;
