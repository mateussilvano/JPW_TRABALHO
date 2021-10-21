const express = require('express')
const router = express.Router()
const Turmamodelo = require('../models/turma_mol')


/*let turma = [
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
]*/
//Pesquisa todas as turmas
router.get('/', async function(req, res){
    let turmamodelos = await Turmamodelo.find()
    Turmamodelo.
    res.json(turmamodelos)
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
router.post('/', async function(req, res){
    let turmamodelos = new Turmamodelo(req.body)
    await turmamodelos.save() 
    res.json(turmamodelos)
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