const express = require("express")
const port = 8080
const app = express()

app.listen(port, () => {
    console.log(`server is now start working on port ${port}`)
})

app.get("/", (req, res) =>{
    res.send("The API is Working")
})