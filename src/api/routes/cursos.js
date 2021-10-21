const express = require('express')
const router = express.Router()
let cursos = [
    {
        "Código":"001",
        "Nome": "Ensino Infantil",
        "Grau": "0",
        "Série Inicial": "1",
        "Série Final": "4",
    },

    {
        "Código":"002",
        "Nome": "Ensino Fundamental 1º ao 5º",
        "Grau": "1",
        "Série Inicial": "1",
        "Série Final": "5",
    },

    {
        "Código":"003",
        "Nome": "Ensino Fundamental 6º ao 9º",
        "Grau": "1",
        "Série Inicial": "3",
        "Série Final": "6",
    },

    {
        "Código":"004",
        "Nome": "Ensino Médio",
        "Grau": "2",
        "Série Inicial": "1",
        "Série Final": "3",
    }
]
//Pesquisa todos cursos
router.get('/', async function(req, res){
    res.json(cursos)
})

//Pesquisa os cursos por ID
router.get('/:id', function(req, res){
    let id = req.params.id

    if(cursos[id] == undefined){
        res.statusCode = 404
    }

    res.json(cursos[id])
})

//Inserir curso
router.post('/', function(req, res){
    let us = req.body
    cursos.push(us)
    res.json(us)
})

//Atualizar curso
router.put('/:id', function(req, res){
    let id = req.params.id
    let us = req.body
    cursos[id] = us
    res.json(us)
})

//Deletar curso por ID
router.delete('/:id', function(req, res){
    let id = req.params.id
    let deletado = cursos.splice(id , 1)
    res.json(deletado)
})

module.exports = router