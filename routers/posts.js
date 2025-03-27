const express = require('express');
const posts=require('../postsArray');
const router = express.Router();

// index
router.get('/', function (req, res) {
    res.json(posts);
});
// show
router.get('/:id', function (req, res) {
    // res.send('Dettagli della ricetta ' + req.params.id);
    res.json(posts[0]);
});
// store
router.post('/', function (req, res) {
    res.send('Creazione nuova ricetta');
});
// update
router.put('/:id', function (req, res) {
    res.send('Modifica della ricetta ' + req.params.id);
});
// modify
router.patch('/:id', function (req, res) {
    res.send('Modifica parziale della ricetta ' + req.params.id);
});
// destroy
router.delete('/:id', function (req, res) {
    res.send('Eliminazione della ricetta ' + req.params.id);
});

module.exports = router;