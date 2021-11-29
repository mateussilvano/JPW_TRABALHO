const express = require('express')
const router = express.Router()
const app = express()
const cors = require('cors')
const estudante = require ('./estudante')
const professor = require ('./professor')
const cursos = require ('./cursos')
const materias = require ('./materias')
const turma = require ('./turma')

router.use(cors())

router.use('/estudante', estudante)
router.use('/professor', professor)
router.use('/cursos', cursos)
router.use('/materias', materias)
router.use('/turma', turma)

module.exports = router