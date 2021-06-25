const Editorial = require('../models/Editorial')
const Libros = require('../models/Libro');

const listarEditoriales = async (req, res) => {
    try{
        const editoriales = await Editorial.find();
        res.status(editoriales.length === 0 ? 404 : 200).json({
            ok: true,
            editoriales
          });
    }catch(e){
        console.log(e);
        res.send(e);
        next();
    }
    
}

const crearEditorial = async (req, res) =>{
   
    try {
        const editorial = new Editorial(req.body);
        await editorial.save();
        res.status(200).json({
            msg : 'Editorial creada con exito!'
        });
    } catch (e) {
        console.log(e);
        res.send(e);
        next();
    }

}

const showEditorial = async (req, res, next ) => {

    try {
        const {id} = req.params;
        const editorial = await Editorial.findById(id);
        if(!editorial){
            res.status(404).json({
                msg : "La editorial no existe"
            });
        }
        res.status(200).json(editorial);
    } 
    catch (e) {
        res.status(400).json({
            msg : "Error de peticion"
        });   
    }
}
const editEditorial = async(req,res) => {
    try {
        const {id} = req.params;
        const { maxLibrosRegistrados } = req.body;
        const libros = await Libros.find();
        const cantLibros = libros.filter( item => item.editorial == id );
        
            if(cantLibros.length  >= maxLibrosRegistrados){
                return res.status(400).json({
                    msg : `No es posible actualizar esta cantidad, la editorial tiene ${cantLibros.length} libros registrados y usted está digitando ${maxLibrosRegistrados}.`,
                })
            }
        
            const editorial = await Editorial.findOneAndUpdate(
            id,
            req.body,
            {new : true}
        );
        res.status(200).json({
            msg : "Editorial actualizada correctamente!"
        });

    } catch (e) {
        res.status(400).json({
            msg : "Error de peticion"
        }); 
    }
}
const deleteEditorial = async (req, res) => {
    try {
        const {id} = req.params;
        const editorial = await Editorial.findById(id);

        if(!editorial){
            res.status(404).json({
                msg : "la editorial no existe."
            })
        }
         
       const eliminado =  await Editorial.findByIdAndDelete(id);

        res.status(200).json({
            msg : "la editorial ha sido eliminado exitosamente!",
            editorial : eliminado
        });

} catch (e) {
        res.status(400).json({
            msg : "Error de peticion"
        });
    }
} 

module.exports = {
    crearEditorial,
    listarEditoriales,
    showEditorial,
    editEditorial,
    deleteEditorial
}