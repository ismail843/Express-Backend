const express = require('express')
const app = express()

app.use('/', function(req, res, next){
    console.log('middleware is running')
    next();
})


app.get('/', function(req, res){
    res.send('hello00012 world')
})



app.listen(3000)