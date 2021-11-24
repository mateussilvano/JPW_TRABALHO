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

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

mongoose.connect(url).then(function(){
    app.listen(5050, function(){
        console.log(`Servidor rodando na porta ${port}`)
    })
}).catch()

