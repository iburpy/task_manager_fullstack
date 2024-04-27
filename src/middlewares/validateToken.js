import jwt from 'jsonwebtoken';
import { SECRET_TOKEN } from '../config.js';

export const authRequired = (req, res, next) => {
    const { token } = req.cookies;
    if (!token) return res.status(401).json({ message: "No token, autorización denegada." });

    jwt.verify(token, SECRET_TOKEN, (err, user) => {
        if (err) return res.status(401).json({ message: "Token inválido, autorización denegada." });
        req.user = user; // Almacena el usuario autenticado en el objeto req
        next(); // Continúa con el flujo de la solicitud
    });
};
