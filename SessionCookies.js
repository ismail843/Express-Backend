const express = require('express')
const app = express()


app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.get('/', function(req, res){
    console.log('This is Home Page')
    res.send("Home page")

})


app.get('/profile', function(req, res,next){
    return next(new Error("Something Went Wrong"))
})

app.use("/profile", function(err, req, res, next) {
    console.error(err.stack)
    res.status(500).sent("wrong hai bhai ")
})



app.listen(3000)