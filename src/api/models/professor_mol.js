const mongoose = require('mongoose')

let schema = new mongoose.Schema({
    codigo:{
        type: Number,
        required: true,
        
    },
    
    nome:{
        type: String,
        required: true,
    },

    email: {
       type: String,
       required: true, 
    },

    senha: {
        type: String,
        required: true,
    },

    dtNascimento: {
        type: Date,
        required: true
    },

    cpf: {
        type: String,
        required: true
    },

    telefone: String,
    nacionalidade: String,
    sexo: String,

    função: {
        type: String,
        required: true
    },

    escolaridade: {
        type: String,
        required: true
    },
   
    admin:{
        type: Boolean,
        default: false,
    }
})

let Professormodelo = mongoose.model('Professormodelo', schema)

module.exports = Professormodelo