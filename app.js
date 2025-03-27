const express = require('express');
const posts=require('./posts');
const app = express();
const port = 4000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('test')
})

app.get('/posts', (req, res) => {
    res.send(posts);
})

app.listen(port, () => {
    console.log(`hei, Example app listening on port ${port}`)
})