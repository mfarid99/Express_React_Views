const { response } = require('express');
const express = require('express')
const app = express();


app.get('/', (req, res) => {
    res.send(`hello world`);
}) 

app.get('/ironman', (req, res)=> {
    res.send('Iron Man is here!!')
})

app.get('/ironman/:myParam/:myParam2', (req, res)=> {
    const {myParam, myParam2} = req.params
    res.send(`${myParam} ${myParam2} ${req.query.ironman}`)
})


app.listen(3000, () => {
    console.log('listening up on port 3000')
})