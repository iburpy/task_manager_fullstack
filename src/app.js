import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/auth.routes.js';
import taskRoutes from './routes/tasks.routes.js';
import cors from 'cors';

// Inicialización de la aplicación Express
const app = express();

// Middleware para habilitar CORS
app.use(cors({ origin: 'http://localhost:5173' }));

// Middleware para registrar solicitudes HTTP en la consola (en modo desarrollo)
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

// Rutas para las funcionalidades de autenticación y tareas
app.use('/api', authRoutes);
app.use('/api', taskRoutes);

export default app;
