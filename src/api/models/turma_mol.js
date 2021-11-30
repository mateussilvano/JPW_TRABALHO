const mongoose = require('mongoose')

let schema = new mongoose.Schema({
    curso:{
        type: String,
        required: true,
        
    },
    
    serie:{
        type: Number,
        required: true,
    },

    turma: {
       type: Number,
       required: true, 
    },

    sala: Number,
    limiteAlunos: Number,
    turno: String,
   
    admin:{
        type: Boolean,
        default: false,
    }
})

let Turmamodelo = mongoose.model('Turmamodelo', schema)

module.exports = Turmamodelo