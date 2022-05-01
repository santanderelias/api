const express = require('express')
const router = express.Router()

router.get('/', (req,res) => {
    res.json({ message: 'Get goals' })
})

router.post('/', (req,res) => {
    res.json({ message: 'Set goals' })
})

router.put('/:id', (req,res) => {
    res.json({ message: `Update ${req.params.id}` })
})

router.delete('/', (req,res) => {
    res.json({ message: `Delete ${req.params.id}` })
})

module.exports = router


