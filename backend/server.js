const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const { v4: uuidv4 } = require('uuid');

const { Recipe } = require('./recipes.js')


const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/8080"
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.Promise = Promise


const port = process.env.PORT || 8080
const app = express()

// Add middlewares to enable cors and json body parsing
app.use(cors())
app.use(bodyParser.json())

// Routes
app.get('/', (req, res) => {
  try {
    res.send('Hello world')
  } catch {
    res.status(400).send(err.message)
  }
})

app.get('/recipes', async (req, res) => {
  try {
    const recipes = await Recipe.find({})
    res.send(recipes)
  } catch (err) {
    res.status(400).send(err.message)
  }
})

app.get('/recipes/:id', async (req, res) => {
  const recipeId = req.params.id
  try {
    res.json(await Recipe.findById(recipeId))
  } catch (err) {
    res.status(400).send(err.message)
  }
})


app.post('/create-recipe', async (req, res) => {
  const { title, imageUrl, ingredients, steps } = req.body

  try {
    const newRecipe = await Recipe.create({ title, imageUrl, ingredients, steps })
    res.send(newRecipe)
  } catch (err) {
    res.status(400).send(err.message)
  }
})

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})
