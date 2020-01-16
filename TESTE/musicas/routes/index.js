var express = require('express');
var router = express.Router();
var Musicas= require('../controllers/musicas')

/* GET home page. */
router.get('/obras', function(req, res, next) {
  if (req.query.compositor==undefined&&req.query.instrumento==undefined) 
  {
  
  Musicas.listar()
  .then(dados => res.jsonp(dados))
  .catch(erro => res.status(500).jsonp(erro))
  }
  if (req.query.compositor!=undefined&&req.query.instrumento==undefined)  
  {
  Musicas.compositor(req.query.compositor)
  .then(dados => res.jsonp(dados))
  .catch(erro => res.status(500).jsonp(erro))
  }
  if (req.query.compositor==undefined&&req.query.instrumento!=undefined) 
  {
  if(req.query.instrumento =="III")
  {
    console.log(req.query.instrumento)
  Musicas.instrumento()
  .then(dados => res.jsonp(dados))
  .catch(erro => res.status(500).jsonp(erro))
  }
}
});
router.get('/tipos', function(req, res, next) {
  Musicas.tipos()
  .then(dados => res.jsonp(dados))
  .catch(erro => res.status(500).jsonp(erro))
})
router.get('/obrasQuant', function(req, res, next) {
  Musicas.obras_quant()
  .then(dados => res.jsonp(dados))
  .catch(erro => res.status(500).jsonp(erro))
})
router.get('/obras/:id', function(req, res) {
  Musicas.consultar(req.params.id)
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro))
})

module.exports = router;
