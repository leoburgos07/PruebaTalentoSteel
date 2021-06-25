const Libro = require('../models/Libro');
const Autor = require('../models/Autor');
const Editorial = require('../models/Editorial');

const listarLibros = async (req, res) =>{
    try{
        const libros = await Libro.find();
        res.status(libros.length === 0 ? 404 : 200).json({
            ok: true,
            libros
          });
    }catch(err){
        console.log(err);
        res.send(err);
        next();
    }

}

const crearLibro = async(req, res) => {
    // 
    //         
    
    try {
            const libro = new Libro(req.body);
            const {autor, editorial} = req.body;
            const registroAutor = await Autor.findById(autor);
            const registroEditorial = await Editorial.findById(editorial);
            if(!registroAutor){
                return res.json({
                    msg : "“El autor no está registrado",
                    ok : false
                });
            }else if(!registroEditorial){
                return res.json({
                    msg : "La editorial no está registrada",
                    ok : false
                });
            }
            const libros = await Libro.find();
            const cantLibros = libros.filter( id => id.editorial == editorial );

            console.log(registroEditorial)
            if(cantLibros.length  >= registroEditorial.maxLibrosRegistrados){
                return res.json({
                    msg : "No es posible registrar el libro, se alcanzó el máximo permitido",
                    ok : false
                })
            }
            
            await libro.save()
            res.json({
                msg : "Libro creado con exito!",
                libro 
            })
    } catch (e) {
        console.log(e);
        res.send(e);
        next();
    }
}

const showLibro = async (req, res, ) => {

    try {
        const {id} = req.params;
        const libro = await Libro.findById(id);
        if(!libro){
            res.status(404).json({
                msg : "El libro no existe"
            });
        }
        res.json(libro);
    } 
    catch (e) {
        res.status(400).json({
            msg : "Error de peticion"
        });   
    }
}
const editLibro = async (req, res) => {
    try {
        const {id} = req.params;
        const libro = await Libro.findOneAndUpdate(
            id,
            req.body,
            {new : true}
        );
        res.json({msg : "El libro ha sido actualizado"})
    } catch (e) {
        res.status(400).json({
            msg : "Error de peticion!"
        }); 
    }
}


module.exports = {
    listarLibros,
    crearLibro,
    showLibro,
    editLibro
}