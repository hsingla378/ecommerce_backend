const express = require("express")
const port = 8080
const app = express()

app.listen(port)

app.get("/", (req, res) =>{
    res.send("The API is Working")
})