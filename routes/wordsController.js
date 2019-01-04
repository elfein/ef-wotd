const router = require('express').Router()
const { Word } = require('../db/model')

// index
router.get('/', async (req, res) => {
    res.sendStatus(200)
})

// show one
router.get('/:dateId', async (req, res) => {
    const word = await Word.find({ dateId: req.params.dateId })
    res.send(word)
})

module.exports = router