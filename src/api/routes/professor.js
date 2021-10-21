const express = require('express')
const router = express.Router()
let usuario = [
    {
        "Código": "1",
        "nome" : "teste",
        "Email": "teste@teste.com",
        "senha": "teste12345",
        "Dt. Nascimento":"09/05/2011",
        "CPF"  : "11111111111",
        "Telefone" : "(48) 11111-1111",
        "Nacionalidade" : "Brasileira",
        "Sexo": "Masculino",
        "Função": "Professor",
        "Escolaridade": "Magistério Completo"
    }
]
//Pesquisa todos os professores
router.get('/', function(req, res){
    res.json(usuario)
})

//Pesquisa o professor por ID
router.get('/:id', function(req, res){
    let id = req.params.id

    if(usuario[id] == undefined){
        res.statusCode = 404
    }

    res.json(usuario[id])
})

//Inserir professor
router.post('/', function(req, res){
    let us = req.body
    usuario.push(us)
    res.json(us)
})

//Atualizar professor
router.put('/:id', function(req, res){
    let id = req.params.id
    let us = req.body
    usuario[id] = us
    res.json(us)
})

//Deletar professor por ID
router.delete('/:id', function(req, res){
    let id = req.params.id
    let deletado = usuario.splice(id , 1)
    res.json(deletado)
})

module.exports = router