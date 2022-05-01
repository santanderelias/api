const express = require('express')
const router = express.Router()

router.get('/', (req,res) => {
    res.json({ message: 'Get goal' })
})

router.post('/', (req,res) => {
    res.json({ message: 'Set goal' })
})

router.put('/:id', (req,res) => {
    res.json({ message: `Update ${req.params.id}` })
})

router.delete('/:id', (req,res) => {
    res.json({ message: `Delete ${req.params.id}` })
})

module.exports = router


