var mongoose = require('mongoose')
var Schema = mongoose.Schema

var ObraSchema = new Schema({
    id: String,
    nome: String,
    desc: String,
    anoCriacao: String,
    periodo: String,
    compositor: String,
    duracao: String,
})

module.exports = mongoose.model('obra', ObraSchema)