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

    grau: {
       type: Number,
       required: true, 
    },

    serieInicial: Number,
    serieFinal: Number,
       
    admin:{
        type: Boolean,
        default: false,
    }
})

let Cursosmodelo = mongoose.model('Cursosmodelo', schema)

module.exports = Cursosmodelo