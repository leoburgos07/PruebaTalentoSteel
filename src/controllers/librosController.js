const Libro = require('../models/Libro');

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
    try {
            const libro = new Libro(req.body);
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


module.exports = {
    listarLibros,
    crearLibro,
    showLibro
}