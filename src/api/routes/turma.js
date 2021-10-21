const express = require('express')
const router = express.Router()
let turma = [
    {
        //Aqui vai buscar o curso em cursos.js
        "Curso": "Ensino Fundamental 1º ao 5º",
        "Serie": "3º ano",
        "Turma": "A",
        "Sala": "6",
        "Limite Alunos":"30",
        //Aqui será para selecionar
        "Turno": "Matutino",
    }
]
//Pesquisa todas as turmas
router.get('/', function(req, res){
    res.json(turma)
})

//Pesquisa as turmas por ID
router.get('/:id', function(req, res){
    let id = req.params.id

    if(turma[id] == undefined){
        res.statusCode = 404
    }

    res.json(turma[id])
})

//Inserir turma
router.post('/', function(req, res){
    let us = req.body
    turma.push(us)
    res.json(us)
})

//Atualizar turma
router.put('/:id', function(req, res){
    let id = req.params.id
    let us = req.body
    turma[id] = us
    res.json(us)
})

//Deletar turma por ID
router.delete('/:id', function(req, res){
    let id = req.params.id
    let deletado = turma.splice(id , 1)
    res.json(deletado)
})

module.exports = router