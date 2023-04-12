const express = require('express')

const app = express()

app.get('/',(req,res) => {
    res.send("Mr. omal harsha nuwan")
})



app.listen(process.env.PORT || 3000)