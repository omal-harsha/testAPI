const express = require('express')

const app = express()

app.use(express.json());

app.get('/',(req,res) => {
    res.send("Mr. omal harsha nuwan")
})

app.get('/greeting',(req,res) => {
    const{name} = req.body;
    const{message} = req.body;

    res.send({greeting: `Hello ${name}! `, message:  message})
})

app.listen(process.env.PORT || 3000)