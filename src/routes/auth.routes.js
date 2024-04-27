import { Router } from "express";
import { login, register, logout, profile } from '../controllers/auth.controller.js';
import { authRequired } from "../middlewares/validateToken.js";

const router = Router();

// Rutas de autenticación
router.post('/register', register); // Registro de usuarios
router.post('/login', login);       // Inicio de sesión
router.post('/logout', logout);     // Cierre de sesión

// Ruta protegida para obtener el perfil del usuario
router.get('/profile', authRequired, profile);

export default router;
