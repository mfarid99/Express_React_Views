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

const ht = "https://media1.s-nbcnews.com/i/newscms/2019_39/3029811/190928-james-hetfield-al-0934_c2693128130150790f2b4d6b20d56f5a.jpg"

const ht2 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzGDCcOtJgpZQjVPFvwffztjWwQEUpSmcrfQ&usqp=CAU"

const ht3 = "https://variety.com/wp-content/uploads/2018/02/james-hetfield.jpg"

app.get ('/sweet', (req, res)=> {
    res.render('sweet', { data: [ht, ht2, ht3] })
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