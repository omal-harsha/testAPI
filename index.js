const express = require('express')

const app = express()

app.use(express.json());

app.get('/',(req,res) => {
    res.send("Mr. omal harsha nuwan")
})

app.post('/greeting',(req,res) => {
    const{name} = req.body;
    const{message} = req.body;

    res.send("Hi " + name + " " + message+ " !")
})

app.listen(process.env.PORT || 3000)