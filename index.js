const express = require('express')

const app = express()

app.get('/',(req,res) => {
    res.send("omal harsha nuwan")
})



app.listen(3000)