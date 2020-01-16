var express = require('express');
var router = express.Router();
var axios = require('axios')
const apikey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1Nzg4NjAwNTQsImV4cCI6MTU4MTQ1MjA1NH0.HIlH4_Ao6504qaLhhbZ2_OtDzaZaG5FeYy-Yc2d9lwQ'
/* GET home page. */

router.get('/', function(req, res, next) {
  axios.get('http://clav-api.dglab.gov.pt/api/entidades?apikey='+ apikey)
  .then(dados=>res.render('index',{lista:dados.data}))
  .catch(erro=>res.status(500).jsonp(erro))
})

router.get('/:id',function(req,res,next){
  console.log(req.params.id)
  axios.get('http://clav-api.dglab.gov.pt/api/entidades/'+ req.params.id + '?apikey='+ apikey)
  .then(dados=>{
    axios.get('http://clav-api.dglab.gov.pt/api/entidades/'+ req.params.id + '/tipologias?apikey='+ apikey)
    .then(dadostip=>{
      axios.get('http://clav-api.dglab.gov.pt/api/entidades/'+ req.params.id + '/intervencao/dono?apikey='+ apikey)
      .then(dadosdono=>{
        axios.get('http://clav-api.dglab.gov.pt/api/entidades/'+ req.params.id + '/intervencao/dono?apikey='+ apikey)
        .then(dadospart=>{
        res.render('entidade',{lista:dados.data,lista2:dadostip.data,lista3:dadosdono.data,lista4:dadospart.data
        })
        .catch(erro=>res.status(500).jsonp(erro))
        })
      .catch(erro=>res.status(500).jsonp(erro))
      })
    .catch(erro=>res.status(500).jsonp(erro))
    })
  .catch(erro=>res.status(500).jsonp(erro))
  })

})

module.exports = router;
