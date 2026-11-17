const mongoose = require('mongoose'); // <--- ADICIONE ESTA LINHA NO TOPO
const CadastroSchema = new mongoose.Schema({
  customId: { type: Number, unique: true, required: true },
  name: { type: String, required: true },
  phone: { type: String, required: true },
  church: { type: String, default: 'IPB Sapucaia do Sul' }, // <-- NOVO CAMPO
  role: { 
    type: String, 
    required: true, 
    enum: ['Membro Comungante', 'Membro Não-Comungante', 'Congregante / Visitante'],
    default: 'Membro Comungante' 
  },
  gifts: { type: [String], default: [] },
  ministry: { type: [String], default: ['Sem Ministério'] },
  status: { type: String, default: 'warning' },
  statusText: { type: String, default: 'Novo Cadastro' },
  attendance: {
    culto: { type: String, default: 'Recente' },
    ebd: { type: String, default: 'A verificar' },
    oracao: { type: String, default: 'A verificar' }
  },
  risks: { type: [String], default: ['Aguardando alocação ministerial inicial'] },
  history: [{
    date: { type: String },
    category: { type: String },
    text: { type: String }
  }],
  reminder: {
    date: { type: String, default: null },
    time: { type: String, default: null },
    repeat: { type: String, default: 'none' },
    notified: { type: Boolean, default: false }
  }
}, { timestamps: true });

module.exports = mongoose.model('Cadastro', CadastroSchema, 'membros');