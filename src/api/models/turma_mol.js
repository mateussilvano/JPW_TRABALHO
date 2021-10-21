const mongoose = require('mongoose')

let schema = new mongoose.Schema({
    nome:{
        type: String,
        required: true,
        unique: true
    },
    senha: String,
    admin: {
        type: Boolean,
        default: false
    }
})

let turma = mongoose.Model