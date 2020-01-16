var Musica = require('../models/musicas')

module.exports.listar = () => {
    return Musica
        .find({},{_id:0,"@id":1,titulo:1,tipo:1,compositor:1})
        .exec()
}
module.exports.consultar = id => {
    return Musica
        .findOne({"@id": id})
        .exec()
}
module.exports.tipos = () => {
    return Musica
        .find({},{tipo:1})
        .distinct('tipo')
        .exec()
}
module.exports.obras_quant = () => {
    return Musica
        //.find({},{"@id":1,titulo:1,$count:instrumentos})
        .find({},{_id:0,"@id":1,titulo:1,instrumentos:1})
        .exec()
}
module.exports.compositor = (compositor) => {
    return Musica
        .find({compositor:compositor})
        .exec()
}
module.exports.instrumento = () => {
    return Musica
        .find({instrumentos:[{instrumento:3}]})
        .exec()
}