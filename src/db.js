import mongoose from 'mongoose'


export const conn_db = async() => {
    try {
        await mongoose.connect('mongodb://localhost:27017/crud-auth')
        console.log('Conectada exitosa Mente')
    } catch (error) {
        console.log('Base de Datos no Conectada', error)
    }
    
}