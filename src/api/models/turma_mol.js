const mongoose = require('mongoose')

let schema = new mongoose.Schema({
    nome:{
        type: String,
        required: true,
        
    },
    senha: String,
    admin: {
        type: Boolean,
        default: false
    }
})

let turmamodelo = mongoose.model('turmamodelo', schema)

module.exports = turmamodelo