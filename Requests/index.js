const express = require('express');
const { cp } = require('fs');
const app = express();
const path = require('path')

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

const comments = [
    {
        username: 'Todd',
        comment: 'lol it is funny'
    },
    {
        username: 'Skyler',
        comment: 'I am offended'
    },
    {
        username: 'Brian',
        comment: 'This is savage!!'
    },
    {
        username: 'Challie',
        comment: 'Please subscribe to my channel'
    }
]

app.get('/comments', (req,res) => {
    res.render('comments/index', {comments})
})

app.get('/comments/new', (req, res) => {
    res.render('comments/new')
})

app.post('/comments', (req,res) => {
    // console.log(req.body)
    const {username, comment} = req.body;
    comments.push({username, comment});
    res.send("IT WORKED!")
})

app.listen(3000, () => {
    console.log("ON PORT 3000!")
})

app.get('/tacos', (req, res) => {
    res.send("GET /tacos response")
})

app.post('/tacos', (req, res) => {
    const {meat, qty} = (req.body);
    res.send(`OK. Here are your ${qty} ${meat} tacos`)
})