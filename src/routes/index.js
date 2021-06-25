const { Router } = require('express');
const router = Router();
const {listarEditoriales, crearEditorial, showEditorial, editEditorial} = require('../controllers/editorialesController');
const {listarAutores, crearAutor, showAutor, editAutor} = require('../controllers/autoresController');
const {listarLibros, crearLibro, showLibro, editLibro}  = require('../controllers/librosController');


//Rutas
//Listar
router.get('/editoriales' , listarEditoriales);
router.get('/autores', listarAutores);
router.get('/libros', listarLibros);

//Crear
router.post('/editoriales', crearEditorial);
router.post('/autores', crearAutor);
router.post('/libros', crearLibro);

//Buscar por ID 
router.get('/buscarEditorial/:id' , showEditorial);
router.get('/buscarLibro/:id', showLibro);
router.get('/buscarAutor/:id', showAutor);

//Editar
router.put('/editarEditorial/:id' , editEditorial);
router.put('/editarLibro/:id' , editLibro);
router.put('/editarAutor/:id' , editAutor);


module.exports = router;


