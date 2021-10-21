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
  
    admin:{
        type: Boolean,
        default: false,
    }
})

let Materiasmodelo = mongoose.model('Materiasmodelo', schema)

module.exports = Materiasmodelo