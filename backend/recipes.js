const mongoose = require('mongoose')

const Ingredient = new mongoose.Schema({ quantity: String, product: String });

module.exports.Recipe = mongoose.model(
  'Recipe',
  new mongoose.Schema({
    title: { type: String, required: true },
    imageUrl: { type: String },
    ingredients: { type: [Ingredient] },
    steps: { type: [String] },
    tags: { type: [String], default: [] },
  })
);
