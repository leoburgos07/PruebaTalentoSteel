const { Router } = require('express');
const router = Router();
const editorialesController = require('../controllers/editorialesController');
const autoresController = require('../controllers/autoresController');
const librosController  = require('../controllers/librosController');


//Rutas
//Listar
router.get('/editoriales' , editorialesController.listarEditoriales);
router.get('/autores', autoresController.listarAutores);
router.get('/libros', librosController.listarLibros);

//Crear
router.post('/editoriales', editorialesController.crearEditorial);
router.post('/autores', autoresController.crearAutor);
router.post('/libros', librosController.crearLibro);

//Buscar por ID 
router.get('/buscarEditorial/:id' , editorialesController.showEditorial);
router.get('/buscarLibro/:id', librosController.showLibro);
router.get('/buscarAutor/:id', autoresController.showAutor);

//Editar
router.put('/editarEditorial/:id' , editorialesController.editEditorial);
router.put('/editarLibro/:id' , librosController.editLibro);
router.put('/editarAutor/:id' , autoresController.editAutor);

//Eliminar
router.delete('/eliminarEditorial/:id', editorialesController.deleteEditorial);
router.delete('/eliminarAutor/:id' , autoresController.deleteAutor);
router.delete('/eliminarLibro/:id', librosController.deleteLibro)


module.exports = router;


