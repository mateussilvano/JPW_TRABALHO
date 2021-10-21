const express = require("express")
const app = express()
const cors = require('cors')
const port = process.env.PORT || 3000
const routes = require('./api/routes/')

app.use(cors())
app.use(express.json())
app.use('/api', routes)

app.listen(port, function(){
    console.log(`Servidor rodando na porta ${port}`)
})