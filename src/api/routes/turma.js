const express = require('express')
const router = express.Router()
const Turmamodelo = require('../models/turma_mol')

//Pesquisa todas as turmas
router.get('/', async function(req, res){
    let limitnumber = parseInt(req.query.limit) || 3
    let skipnumber = parseInt(req.query.limit) || 0
    let turmamodelo = await Turmamodelo.find().limit(limitnumber).skip(skipnumber)
    res.json(turmamodelo)
    
})

//Pesquisa as turmas por ID
router.get('/:id', async function(req, res){
    let id = req.params.id
    let turmamodelo = await Turmamodelo.findById(id)

    if(!turmamodelo){
        res.status(404).json ({error: "Turma não encontrada"})
    }
    res.json(turmamodelo[id])
})

//Inserir turma
router.post('/', async function(req, res){
    let turmamodelo = new Turmamodelo(req.body)
    await turmamodelo.save() 
    res.json(turmamodelo)
})

//Atualizar turma
router.put('/:id', async function(req, res){
    let id = req.params.id
    let turmamodelo = await  Turmamodelo.findByIdAndUpdate(id, req.body)
    res.json(turmamodelo)
})

//Deletar turma por ID
router.delete('/:id', async function(req, res){
    let id = req.params.id
    let turmamodelo = await  Turmamodelo.findByIdAndDelete(id, req.body)
    res.json(turmamodelo)
})

module.exports = router