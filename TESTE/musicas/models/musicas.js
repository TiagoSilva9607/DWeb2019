const mongoose = require('mongoose')
var partituraSchema = new mongoose.Schema({
    path: String
})
var instrumentosSchema = new mongoose.Schema({
    designacao: String,
    partitura: [partituraSchema]
})


var musicasSchema = new mongoose.Schema({
    
    id: String,
    titulo: String,
    tipo: String,
    compositor: String,
    instrumentos: [instrumentosSchema]
  });

module.exports = mongoose.model('musicas', musicasSchema)