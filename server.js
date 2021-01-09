const { response } = require('express');
const express = require('express')
const app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.static('public'))


app.get('/', (req, res) => {
    res.render('index', {ironman: 'Robert Downey Jr'});
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