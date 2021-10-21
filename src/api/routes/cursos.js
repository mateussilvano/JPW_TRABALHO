const express = require('express')
const router = express.Router()
const Cursosmodelo = require('../models/cursos_mol')
   
//Pesquisa todos cursos
router.get('/', async function(req, res){
    let limitnumber = parseInt(req.query.limit) || 5
    let skipnumber = parseInt(req.query.limit) || 0
    let cursosmodelo = await Cursosmodelo.find({grau: "1"}).limit(limitnumber).skip(skipnumber)
    res.json(cursosmodelo)
})

//Pesquisa os cursos por ID
router.get('/:id', async function(req, res){
    let id = req.params.id
    let cursosmodelo = await Cursosmodelo.findById(id)

    if(!cursosmodelo){
        res.status(404).json ({error: "Curso não encontrada"})
    }
    res.json(cursosmodelo[id])
})

//Inserir curso
router.post('/', async function(req, res){
    let cursosmodelo = new Cursosmodelo(req.body)
    await cursosmodelo.save() 
    res.json(cursosmodelo)
})

//Atualizar curso
router.put('/:id', async function(req, res){
    let id = req.params.id
    let cursosmodelo = await  Cursosmodelo.findByIdAndUpdate(id, req.body)
    res.json(cursosmodelo)
})

//Deletar curso por ID
router.delete('/:id', async function(req, res){
    let id = req.params.id
    let cursosmodelo = await  Cursosmodelo.findByIdAndDelete(id, req.body)
    res.json(cursosmodelo)
})

module.exports = router