const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
// const mongoose = require('mongoose')
const mockData = require('./mock-data.json')

const port = process.env.PORT || 8080
const app = express()

// Add middlewares to enable cors and json body parsing
app.use(cors())
app.use(bodyParser.json())

// Routes
app.get('/', (req, res) => {
  res.send('Hello world')
})

app.get('/recipes', (req, res) => {
  res.json(mockData.recipes)
})

app.get('/recipes/:id', (req, res) => {
  res.json(mockData.recipes[0])
})

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})
