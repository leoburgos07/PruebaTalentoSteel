const { Schema, model } = require('mongoose');

const AutorSchema = new Schema({
    nombreCompleto : { type : String , required : true },
    fechaNacimiento : { type : Date , required : true},
    ciudadNatal : { type : String , required : true}, 
    email : { type : String , required : true, unique: true, lowercase: true } 
},{
    timestamps: {createdAt: true, updatedAt: true}
});

module.exports = model('Autor',AutorSchema);