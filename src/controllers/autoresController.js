const Autor = require('../models/Autor')

const listarAutores = async (req, res) => {
    try{
        const autores = await Autor.find();
        res.status(autores.length === 0 ? 404 : 200).json({
            ok: true,
            autores
          });
    }catch(e){
        console.log(e);
        res.send(e);
        next();
    }
    
}

const crearAutor = async(req, res) => {
    try {
            const autor = new Autor(req.body);
            await autor.save()
            res.json({
                msg : "Autor creado con exito!",
                autor
            })
    } catch (e) {
        console.log(e);
        res.send(e);
        next();
    }
}

const showAutor = async (req, res,) => {

    try {
        const {id} = req.params;
        const autor = await Autor.findById(id);
        if(!autor){
            res.status(404).json({
                msg : "El autor no existe"
            });
        }
        res.json(autor);
    } 
    catch (e) {
        res.status(400).json({
            msg : "Error de peticion"
        });   
    }
}
const editAutor = async(req,res) => {
    try {
        const {id} = req.params;
        const autor = await Autor.findOneAndUpdate(
            id,
            req.body,
            {new : true}
        );
        res.json({
            msg : "Autor actualizado correctamente"
        });
    } catch (e) {
        res.status(400).json({
            msg : "Error de peticion"
        }); 
    }
}




module.exports = {
    listarAutores,
    crearAutor,
    showAutor,
    editAutor
}