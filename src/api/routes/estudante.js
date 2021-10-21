const express = require('express')
const router = express.Router()
let estudante = [
    {
        "Código": "85000",
        "nome" : "teste",
        "Email": "teste@teste.com",
        "senha": "teste12345",
        "Dt. Nascimento":"09/05/2011",
        "CPF"  : "11111111111",
        "Telefone" : "(48) 11111-1111",
        "Nacionalidade" : "Brasileira",
        "Sexo": "Masculino"
    }
]
//Pesquisa todos os estudante
router.get('/', function(req, res){
    res.json(estudante)
})

//Pesquisa o estudante por ID
router.get('/:id', function(req, res){
    let id = req.params.id

    if(estudante[id] == undefined){
        res.statusCode = 404
    }

    res.json(estudante[id])
})

//Inserir usuário
router.post('/', function(req, res){
    let us = req.body
    estudante.push(us)
    res.json(us)
})

//Atualizar estudante
router.put('/:id', function(req, res){
    let id = req.params.id
    let us = req.body
    estudante[id] = us
    res.json(us)
})

//Deletar estudante por ID
//router.delete('/:id', function(req, res){
//    let id = req.params.id
//    let deletado = estudante.splice(id , 1)
//    res.json(deletado)
//})

module.exports = router