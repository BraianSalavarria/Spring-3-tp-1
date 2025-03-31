import express from 'express';
 import {obtenerSuperheroePorIdController, obtenerTodosLosSuperheroesCotroller,  buscarSuperheroesPorAtributoController, 
    obtenerSuperheroesMayoresDe30Controller, insertarSuperheroeControlloer, 
    actualizarCompletoSuperheroeController,eliminarSuperheroeController,eliminarSuperheroePorNombreController,
 } from '../controllers/superheroesController.mjs'

 const router = express.Router();
 router.get('/heroes/mayores-30', obtenerSuperheroesMayoresDe30Controller);
 router.get('/heroes',obtenerTodosLosSuperheroesCotroller);
 router.get('/heroes/:id', obtenerSuperheroePorIdController);
 router.get('/heroes/buscar/:atributo/:valor',buscarSuperheroesPorAtributoController);
 router.post('/heroes/nuevo_superheroe', insertarSuperheroeControlloer);
 router.put('/heroes/actualizar_superheroe/:id',actualizarCompletoSuperheroeController);
 router.delete('/heroes/borrar/:id',eliminarSuperheroeController );
 router.delete('/heroes/borrar/nombre/:nombre',eliminarSuperheroePorNombreController);
 

 export default router;
