var express = require('express');
var router = express.Router();
var obras = require('../Controllers/obraController')

/* GET home page. */
router.get('/', function(req, res, next) {
  if(req.query.compositor!=undefined && req.query.duracao!=undefined){
    console.log('a procurar comp')
    obras.consultarCompDur(req.query.compositor,req.query.duracao)
    .then(dados=>res.jsonp(dados))
    .catch(erro=>res.status(500).json(dados))
  }
  if(req.query.periodo!=undefined){
    console.log('A procurar por Periodo')
    obras.consultarPeriodo(req.query.periodo)
    .then(dados=>res.jsonp(dados))
    .catch(erro=>res.status(500).jsonp(erro))
  }
  if(req.query.ano==undefined){
    obras.listar()
    .then(dados=>res.jsonp(dados))
    .catch(erro=>res.status(500).jsonp(erro))
  }
  if(req.query.ano!=undefined){
    console.log('a procurar...')
    obras.consultarAno(req.query.ano)
    .then(dados=>res.jsonp(dados))
    .catch(erro=>res.status(500).jsonp(erro))
  }
});




router.get('/compositores',function(req,res,next){
  console.log('a encontrar lista de compositores')
  obras.compositores()
  .then(dados=>{
    res.jsonp(dados)
  })
  .catch(erro=>res.status(500).jsonp(erro))
})


router.get('/periodos',function(req,res){
  console.log('a encontrar lista de periodos')
  obras.listarperiodos()
  .then(dados=>{
    res.jsonp(dados)
  })
  .catch(erro=>res.status(500).jsonp(erro))
})

router.get('/:id',function(req,res){
  obras.consultar(req.params.id)
  .then(dados=>res.jsonp(dados))
  .catch(erro=>res.status(500).jsonp(erro))
})


module.exports = router;
