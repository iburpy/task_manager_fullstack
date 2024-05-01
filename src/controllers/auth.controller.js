import User from "../models/user.model.js";
import bcrypt from 'bcryptjs';
import { createToken } from '../libs/jwt.js';

export const register = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        // Validación de datos de entrada
        if (!username || !email || !password) {
            return res.status(400).json({ message: "Por favor, proporciona todos los campos requeridos." });
        }

        // Comprueba si el usuario ya existe en la base de datos
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json(["El correo electrónico ya está registrado usa otro."]);
        }

        // Hash de la contraseña
        const hashPass = await bcrypt.hash(password, 10);
        const newUser = new User({ username, email, password: hashPass });

        // Guardar el nuevo usuario en la base de datos
        const savedUser = await newUser.save();

        // Generar token JWT
        const token = await createToken({ id: savedUser._id });

        // Enviar respuesta con el token y los detalles del usuario
        res.cookie('token', token);
        res.json({
            token,
            new_user: {
                id: savedUser._id,
                username: savedUser.username,
                email: savedUser.email,
                createdAt: savedUser.createdAt,
                updatedAt: savedUser.updatedAt
            }
        });

    } catch (error) {
        // Manejo de errores
        console.error("Error en el registro:", error);
        res.status(500).json({ message: "Hubo un error al registrar el usuario." });
    }
}

export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Buscar usuario por email
        const userFound = await User.findOne({ email });
        if (!userFound) {
            return res.status(401).json({ message: 'El correo electrónico no está registrado.' });
        }

        // Comparar contraseñas
        const passMatch = await bcrypt.compare(password, userFound.password);
        if (!passMatch) {
            return res.status(401).json({ message: 'La contraseña es incorrecta.' });
        }

        // Generar token JWT
        const token = await createToken({ id: userFound._id });

        // Enviar respuesta con el token y los detalles del usuario
        res.cookie('token', token);
        res.json({
            token,
            user: {
                id: userFound._id,
                username: userFound.username,
                email: userFound.email,
                createdAt: userFound.createdAt,
                updatedAt: userFound.updatedAt
            }
        });

    } catch (error) {
        // Manejo de errores
        console.error("Error en el inicio de sesión:", error);
        res.status(500).json({ message: "Hubo un error al iniciar sesión." });
    }
}

export const logout = async (req, res) => {
    // Eliminar la cookie 'token' estableciendo una fecha de expiración en el pasado
    res.cookie('token', '', { expires: new Date(0) });    
    // Enviar respuesta informando que la sesión se ha cerrado correctamente
    return res.sendStatus(200)
}

export const profile = async (req, res) => {
    const userFound = await User.findById(req.user.id)
    if(!userFound) return res.status(400).json({ message: 'El usuario no existe.' });
    return res.json
    ({
        id: userFound._id,
        username: userFound.username,
        email: userFound.email,
        createdAt: userFound.createdAt,
        updatedAt: userFound.updatedAt,
    })
}