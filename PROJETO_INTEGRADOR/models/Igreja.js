const mongoose = require('mongoose');

const IgrejaSchema = new mongoose.Schema({
  nome: { type: String, required: true, unique: true },
  cidade: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Igreja', IgrejaSchema, 'igrejas');