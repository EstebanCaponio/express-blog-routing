// collllego express
const express = require('express');
//collego posts nella cartella router
const router=require('./routers/posts');
const app = express();
const port = 4000;

app.use("/posts", router);

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('sei nella home');
})

app.listen(port, () => {
    console.log(`hei, Example app listening on port ${port}`)
})