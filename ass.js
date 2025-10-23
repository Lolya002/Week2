
// Environment variables

require("dotenv").config()

// Calling and Instatiation of packages

const express = require("express")
const app = express()
const path = require("path")
const port = process.env.port



app.get("/", (req, res) => {
    res.send("My Week 2 API!")
})

// Built-In Middleware

app.use(express.json())

app.use(express.static(path.join(__dirname, "public"))) // Serve static file


// Custom Middleware

app.use((req, res, next) => {
    console.log("Sorry i had this assignment submitted late~~")
    next()

})



// Serve main file

app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "index.html"))
})


app.post("/status", (req, res) => {
    const {name, email} = req.body
    if(!name) return res.status(400).send("Name required!")
    res.status(201).json({message : `Hello ${name}!!`})
})

app.get("/user/:id", (req, res) => {
    const id = req.params.id
    res.send(`User ${id} profile`)
})


// Local Host

app.listen(port, () => {
    console.log(`Running http://localhost:${port}`)
})