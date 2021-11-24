const express = require('express')
const cors = require('cors')
const app = express()
const router = express.Router()
const Professormodelo = require('../models/professor_mol')

//Pesquisa todos os professores
router.get('/', async function (req, res) {
    let limitnumber = parseInt(req.query.limit) || 3
    let skipnumber = parseInt(req.query.limit) || 0
    let professormodelo = await Professormodelo.find().limit(limitnumber).skip(skipnumber)
    res.json(professormodelo)
})

//Pesquisa o professor por ID
router.get('/:id', async function (req, res) {
    let id = req.params.id
    let professormodelo = await Professormodelo.findById(id)

    if (!professormodelo) {
        res.status(404).json({ error: "Turma não encontrada" })
    }
    res.json(professormodelo[id])
})
//Inserir professor
router.post('/', async function (req, res) {
    let professormodelo = new Professormodelo(req.body)
    await professormodelo.save()
    res.json(professormodelo)
})

//Atualizar professor
router.put('/:id', async function (req, res) {
    let id = req.params.id
    let professormodelo = await Professormodelo.findByIdAndUpdate(id, req.body)
    res.json(professormodelo)
})

//Deletar professor por ID
router.delete('/:id', async function (req, res) {
    let id = req.params.id
    let professormodelo = await Professormodelo.findByIdAndDelete(id, req.body)
    res.json(professormodelo)
})

module.exports = router