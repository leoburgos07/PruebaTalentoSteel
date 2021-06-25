const { Schema, model } = require('mongoose');

const LibroSchema = new Schema({
    titulo : { type : String, required : true },
    anio : { type : Date , required : true },
    genero : { type : String , required : true }, 
    numPaginas : { type : Number , required : true },
    editorial : {
        type: Schema.Types.ObjectId,
        ref: 'Editorial',
        required: true
      },
    autor : {
        type: Schema.Types.ObjectId,
        ref: 'Autor',
        required: true
      }   
},{
    timestamps: {createdAt: true, updatedAt: true}
});

module.exports = model('Libro', LibroSchema);
