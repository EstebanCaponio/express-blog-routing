const express = require('express');
const posts=require('./postsArray');
const router=require('./routers/posts');
const app = express();
const port = 4000;

// app.use("/postsArray", posts);
app.use("/posts", router);

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('sei nella home');
})

// app.get('/postsArray', (req, res) => {
//     res.send(posts);
// })



app.listen(port, () => {
    console.log(`hei, Example app listening on port ${port}`)
})