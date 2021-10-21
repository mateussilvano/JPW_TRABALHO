const express = require('express')
const router = express.Router()
let materias = [
    {
        "código": "038",
        "nome": "Artes",
    },
    {
        "código": "008",
        "nome": "Ciências",
    },
    {
        "código": "010",
        "nome": "Eduação Física",
    },
    {
        "código": "005",
        "nome": "Geografia",
    },
    {
        "código": "004",
        "nome": "História",
    }
]
//Pesquisa todas as materias
router.get('/', function (req, res) {
    res.json(materias)
})

//Pesquisa a materia por ID
router.get('/:id', function (req, res) {
    let id = req.params.id

    if (materias[id] == undefined) {
        res.statusCode = 404
    }

    res.json(materias[id])
})

//Inserir matéria
router.post('/', function (req, res) {
    let us = req.body
    materias.push(us)
    res.json(us)
})

//Atualizar matéria
router.put('/:id', function (req, res) {
    let id = req.params.id
    let us = req.body
    materias[id] = us
    res.json(us)
})

//Deletar materia por ID
router.delete('/:id', function (req, res) {
    let id = req.params.id
    let deletado = materias.splice(id, 1)
    res.json(deletado)
})

module.exports = router