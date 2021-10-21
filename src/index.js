const express = require("express")
const app = express()
const cors = require('cors')
const port = process.env.PORT || 3000
const routes = require('./api/routes/')
const mongoose = require('mongoose')
const url = 'mongodb+srv://sysdba:masterkey@cluster0.cwnax.mongodb.net/jpw?retryWrites=true&w=majority'

//app.use(cors())
app.use(express.json())
app.use('/api', routes)

mongoose.connect(url).then(function () {
    app.listen(8080, function () {
        console.log(`Servidor rodando na porta ${port}`)

    })
})