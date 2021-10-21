const express = require('express')
const router = express.Router()
const Estudantemodelo = require('../models/estudante_mol')

//Pesquisa todos os estudante
router.get('/', async function(req, res){
    let limitnumber = parseInt(req.query.limit) || 3
    let skipnumber = parseInt(req.query.limit) || 0
    let estudantemodelo = await Estudantemodelo.find({nome: "mateus"}).limit(limitnumber).skip(skipnumber)
    res.json(estudantemodelo)
})

//Pesquisa o estudante por ID
router.get('/:id', async function(req, res){
    let id = req.params.id
    let estudantemodelo = await Estudantemodelo.findById(id)

    if(!estudantemodelo){
        res.status(404).json ({error: "Turma não encontrada"})
    }
    res.json(estudantemodelo[id])
})

//Inserir estudante
router.post('/', async function(req, res){
    let estudantemodelo = new Estudantemodelo(req.body)
    await estudantemodelo.save() 
    res.json(estudantemodelo)
})

//Atualizar estudante
router.put('/:id', async function(req, res){
    let id = req.params.id
    let estudantemodelo = await  Estudantemodelo.findByIdAndUpdate(id, req.body)
    res.json(estudantemodelo)
})

//Deleta os estudante por ID
router.delete('/:id', async function(req, res){
    let id = req.params.id
    let estudantemodelo = await  Estudantemodelo.findByIdAndDelete(id, req.body)
    res.json(estudantemodelo)
})

module.exports = router