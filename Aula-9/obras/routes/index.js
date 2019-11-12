var express = require('express');
var router = express.Router();

var Obras= require('../controllers/obras')

/* GET home page. */
router.get('/', function(req, res, next) {
  if (req.query.ano==undefined && req.query.compositor==undefined&&req.query.periodo==undefined) 
 {
  Obras.listar()
  .then(dados => res.jsonp(dados))
  .catch(erro => res.status(500).jsonp(erro))
 }
 if (req.query.ano!=undefined && req.query.compositor==undefined&&req.query.periodo==undefined) 
 {
  Obras.Obras_Ano(req.query.ano)
  .then(dados => res.jsonp(dados))
  .catch(erro => res.status(500).jsonp(erro))

 }
 if (req.query.ano==undefined && req.query.compositor!=undefined&&req.query.duracao!=undefined) 
 {
  Obras.obras_compositor_duracao(req.query.compositor,req.query.duracao)
  .then(dados => res.jsonp(dados))
  .catch(erro => res.status(500).jsonp(erro))
 }
 if (req.query.ano==undefined && req.query.compositor==undefined&&req.query.periodo!=undefined) 
 {
  Obras.obras_periodo(req.query.periodo)
  .then(dados => res.jsonp(dados))
  .catch(erro => res.status(500).jsonp(erro))
 }
});

router.get('/compositores', function(req, res, next) {
  
  Obras.compositores()
  .then(dados => res.jsonp(dados))
  .catch(erro => res.status(500).jsonp(erro))
});
router.get('/periodos', function(req, res, next) {
  Obras.periodos()
  .then(dados => res.jsonp(dados))
  .catch(erro => res.status(500).jsonp(erro))
});

router.get('/:idObra', function(req, res) {
  Obras.consultar(req.params.idObra)
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro))
})

module.exports = router;
