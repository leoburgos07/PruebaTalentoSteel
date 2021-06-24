const { Schema, model } = require('mongoose');

const EditorialSchema = new Schema({
    nombre : { type : String , required : true, trim : true },
    direccion : { type : String , required :true },
    telefono : { type : String , required : true }, 
    email : { type : String , required : true , unique:true, lowercase: true },
    maxLibrosRegistrados : { type : Number , required : true }
},{
    timestamps: {createdAt: true, updatedAt: true}
});

module.exports = model('Editoriales',EditorialSchema);