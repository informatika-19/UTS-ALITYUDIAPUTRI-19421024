const router = require('express').Router()
const dosenController = require('../controller/dosen')

router.post('/insert', (req, res) => {
    dosenController.create(req.body)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

router.get('/getall', (req, res) => {
    dosenController.showALLData()
    .then(result => res.json(result))
    .catch(err => res.json(err))
})
router.get('/getbyid/:id', (req, res) => {
    dosenController.showALLDataById(req.params.id)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

router.put('/update/:id', (req, res) => {
    dosenController.update(req.params.id, req.body)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

router.delete('/delete/:id', (req, res) => {
    dosenController.delete(req.params.id)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})
module.exports = router