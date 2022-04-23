const express = require('express')
const app = express();
const path = require('path')

app.use(express.static(path.join(__dirname, 'public')));


const redditData = require('./data.json');
console.log(redditData)

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))

app.get('/', (req, res) => {
    console.log("/ Request!")
    res.render('home.ejs')
})

app.get('/rand', (req, res) => {
    console.log("/rand Request!")
    const rand = Math.floor(Math.random() * 10) + 1;
    res.render('random.ejs', { rand })
})

app.get('/cats', (req, res) => {
    const cats = [
        'Blue', 'Rocket', 'Monty', 'Stephanie', 'Winston'
    ]
    res.render('cats', {cats})
})

app.get('/r/:subreddit', (req, res) => {
    const {subreddit} = req.params;
    const data = redditData[subreddit];
    console.log(data)
    if(data){
        res.render('subreddit', {...data})
    }else{
        res.render('notfound', {subreddit})
    }

})

app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000!")
})