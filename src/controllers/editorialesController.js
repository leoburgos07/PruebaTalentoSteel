const Editorial = require('../models/Editorial')

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
        res.send('Editorial creada con exito!');
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
        res.json(editorial);
    } 
    catch (e) {
        res.status(400).json({
            msg : "Error de peticion"
        });   
    }
}

module.exports = {
    crearEditorial,
    listarEditoriales,
    showEditorial
}