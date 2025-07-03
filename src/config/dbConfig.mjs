import mongoose from "mongoose";

export async function connectDB() {
    try{
        await mongoose.connect("mongodb+srv://Grupo-17:grupo17@cursadanodejs.ls9ii.mongodb.net/Node-js");
        console.log('coneccion a la base de datos exitosa');
    }catch (error){
        console.error("error al conectar mongo db", error);
        process.exit(1);
    }
}