const express = require('express')
const router = express.Router()
const Materiasmodelo = require('../models/materias_mol')

//Pesquisa todas as materias
router.get('/', async function(req, res){
    let limitnumber = parseInt(req.query.limit) || 3
    let skipnumber = parseInt(req.query.limit) || 0
    let materiasmodelo = await Materiasmodelo.find().limit(limitnumber).skip(skipnumber)
    res.json(materiasmodelo)
})

//Pesquisa a materia por ID
router.get('/:id', async function(req, res){
    let id = req.params.id
    let materiasmodelo = await Materiasmodelo.findById(id)

    if(!materiasmodelo){
        res.status(404).json ({error: "Turma não encontrada"})
    }
    res.json(materiasmodelo[id])
})

//Inserir matéria
router.post('/', async function(req, res){
    let materiasmodelo = new Materiasmodelo(req.body)
    await materiasmodelo.save() 
    res.json(materiasmodelo)
})

//Atualizar matéria
router.put('/:id', async function(req, res){
    let id = req.params.id
    let materiasmodelo = await  Materiasmodelo.findByIdAndUpdate(id, req.body)
    res.json(materiasmodelo)
})

//Deletar materia por ID
router.delete('/:id', async function(req, res){
    let id = req.params.id
    let materiasmodelo = await  Materiasmodelo.findByIdAndDelete(id, req.body)
    res.json(materiasmodelo)
})

module.exports = router