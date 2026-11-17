const mongoose = require('mongoose');

const administradorSchema = new mongoose.Schema({
  customId: { type: Number, unique: true, required: true },
  nome: { type: String, required: true, unique: true },
  senha: { type: String, required: true }, // Senha deve ser obrigatória
  celular: { 
    type: Number, 
    required: false, // Celular opcional para não dar erro no cadastro atual
    default: 0 
  }
}, { timestamps: true });

module.exports = mongoose.model('Administrador', administradorSchema);