const express = require("express")
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5050
const routes = require('./api/routes/')
const mongoose = require('mongoose')
const url = 'mongodb+srv://sysdba:masterkey@cluster0.cwnax.mongodb.net/jpw?retryWrites=true&w=majority'

app.use(express.json())
app.use('/api', routes)
app.use(cors())

mongoose.connect(url).then(function(){
    app.listen(5050, function(){
        console.log(`Servidor rodando na porta ${port}`)
    })
}).catch()