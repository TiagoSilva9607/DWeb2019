var Obra = require('../model/obras')

module.exports.listar = () => {
    return Obra
        .find()
        .exec()
}
module.exports.Obras_Ano = (ano) => {
    return Obra
        .find({anoCriacao:ano})
        .exec()
}
module.exports.obras_compositor_duracao = (compositor,duracao) => {
    return Obra
        .find({compositor:compositor,duracao:duracao})
        .exec()
}
module.exports.obras_periodo = (periodo) => {
    return Obra
        .find({periodo:periodo})
        .exec()
}
module.exports.consultar = id => {
    return Obra
        .findOne({"@id": id})
        .exec()
}
module.exports.compositores = () => {
    return Obra
        .find({},{compositor:1})
        .distinct('compositor')
        .exec()
}
module.exports.periodos = () => {
    return Obra
        .find({},{periodo:1})
        .distinct('periodo')
        .exec()
}