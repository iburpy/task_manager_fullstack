import User from "../models/user.model.js";
import bcrypt from 'bcryptjs';
import {createToken} from '../libs/jwt.js';

export const register = async (req, res) => {
    const {username, email, password} = req.body;

    try {
        const hashPass = await bcrypt.hash(password, 10)
        const newUser = new User({
            username,
            email,
            password: hashPass,
            });

        console.log(newUser);

        const savedUser = await newUser.save();
        
        const token = await createToken({id: savedUser._id});
        console.log(token);
        res.cookie('token', token);

        res.json({
            'token': token,
            new_user: 
            {
                id: savedUser._id,
                username: savedUser.username,
                email: savedUser.email,
                createdAt: savedUser.createdAt,
                updatedAt: savedUser.updatedAt
            }
        });

    } catch (error) {
        res.status(500).json({message: error.message});
    };
}
export const login = async (req, res) => {
    const {email, password} = req.body;

    try {
        const userFound = await User.findOne({email});

        if (!userFound) return res.status(401).json({message: 'No se encontró el correo' + email});

        const passMatch = await bcrypt.compare(password, userFound.password);

        if(!passMatch) return res.status(401).json({message: 'La contraseña es incorrecta.'});
        
        const token = await createToken({id: userFound._id});

        res.cookie('token', token);

        res.json({
            'token': token,
            new_user: 
            {
                id: userFound._id,
                username: userFound.username,
                email: userFound.email,
                createdAt: userFound.createdAt,
                updatedAt: userFound.updatedAt
            }
        });

    } catch (error) {
        res.status(500).json({message: error.message});
    };
}