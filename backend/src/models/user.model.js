//expecificamos a mongodb como van a lucir los datos que estamos guardando esta funcion crea un tipo de tabla fija para mongo

import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: 
    { type: String, required: true, trim: true, index: {unique: true} },
    email: { type: String, required: true, index: {unique: true}, },
    password: { type: String, required: true }
}, { 
    timestamps: true,
    versionKey: false,
    _id: true,
})

export default mongoose.model('User', userSchema)