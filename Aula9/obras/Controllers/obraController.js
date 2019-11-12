var Obra = require('../Models/obraModel')

// Devolve a lista de alunos
module.exports.listar = () => {
    return Obra
        .find()
        .exec()
}

// Devolve a informação de um Obra
module.exports.consultar = id => {
    return Obra
        .findOne({'@id': id})
        .exec()
}

module.exports.consultarPeriodo = Peri=>{
    return Obra
        .find({periodo:Peri})
        .exec()
}

module.exports.consultarAno = ano =>{
    return Obra
        .find({anoCriacao: ano})
        .exec()
}

module.exports.consultarCompDur = function(Comp,Dur){
    return Obra
        .find({compositor: Comp,duracao:Dur})
        .exec()
}

module.exports.compositores = function(){
    return Obra
        .distinct('compositor')
        .exec()
}

module.exports.listarperiodos = () =>{
    return Obra
        .distinct('periodo')
        .exec()
}

// Devolve o número de Obras na BD
module.exports.contar = () => {
    return Obra
        .countDocuments()
        .exec()
}

module.exports.inserir = Obra => {
    var novo = new Obra(Obra)
    return novo.save()
}

module.exports.remover = function(id){
    return Obra.deleteOne({_id: id})
}

module.exports.editar = function(Obra){
    return Obra.findByIdAndUpdate({_id: Obra.id}, Obra,{new:true}).exec()
}