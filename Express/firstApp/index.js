const express = require('express')
const app = express()
// console.dir(app)

// app.use((req, res) => {
//     console.log("We got a NEW request!!")
//     // res.send("Hello! We got your request!")
//     // res.send({color: 'red'})
//     res.send("<h1>This is a web page</h1>")
// })

app.get('/', (req, res) => {
    console.log("NEW request")
    res.send('<h1>HOME page</h1>')
})

app.get('/cats', (req, res) => {
    console.log("CAT request")
    res.send('MEOWWW!!')
})

app.get('/dogs', (req, res) => {
    console.log("DOG request")
    res.send('WOOFFF!!')
})

//--------------------------------------------------------
//PATH parameters
app.get('/r/:subreddit', (req, res) => {
    console.log("Path Parameter Request")
    const { subreddit } = req.params;
    res.send(`<h1>Browsing the ${subreddit} subreddit</h1>`)
})

//--------------------------------------------------------
//QUERY parameters
app.get('/search', (req, res) => {
    console.log("Query Parameter Request")
    const { q } = req.query;
    if(!q){
        res.send('NOTHING FOUND IF NOTHING IS QUERIED')
    }else{
        console.log(req.query)
        res.send(`<h1>Search Results for ${q}</h1>`)
    }
})

//--------------------------------------------------------

//For GENERIC get - AND THIS should always come at the end
app.get('*', (req, res) => {
    console.log("ANY request")
    res.send('<h1>GENERIC page</h1>')
})

//--------------------------------------------------------

//For POSTing
app.post('/cats', (req, res) => {
    res.send('This is a POST request to /cats')
})

app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000!")
})