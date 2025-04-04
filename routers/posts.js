const express = require('express');
const posts=require('../postsArray');
const router = express.Router();

// index
router.get('/', function (req, res) {
    res.json(posts);
});
// show
router.get('/:id', function (req, res) {
   
let result = 'ricetta non trovata';

    posts.forEach((element) => {

        if(element.slug === req.params.id){
            result = element
        }
    });
    res.json(result);
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