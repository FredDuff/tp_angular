const express = require('express');
const Tw = require('../models/tw');

const Router = express.Router();

Router.get("/", async(req, res) => {
  Tw.findAll()
    .then(async tws => {
      res.status(200).json(tws);
    })
    .catch(erreur => {
      res.status(500).json({ 'erreur': erreur })
    });
});

Router.get("/:id", async(req, res) => {
  Tw.findByPk(req.params.id)
    .then(async tw => {
      res.status(200).json(tw);
    })
    .catch(erreur => {
      res.status(500).json({ 'erreur': erreur })
    });
});

Router.post('/', async(req, res) => {
  if ((req.body.message && req.body.message != '') && (req.body.user_id && req.body.user_id != '')) {
    Tw.create({
      message: req.body.message,
      user_id: req.body.user_id,
    })
    .then(async tw => {
      res.status(201).json(tw)
    })
    .catch(err => {
      res.status(500).json({ 'erreur': err})
    });
  } else {
    res.status(500).json({
      'erreur': 'Il manque des paramètres.'
    });
  }
});

Router.put('/:id', async(req, res) => {
  if ((req.body.message && req.body.message != '')) {
    Tw.update(
      { message: req.body.message },
      { returning: true, where: { id: req.params.id }}
    )
    .then(function(obj){
      res.status(200).json(obj)
    })
    .catch(err => {
      res.status(500).json({ 'erreur': err})
    });
  } else {
    res.status(500).json({
      'erreur': 'Il manque des paramètres.'
    });
  }
});
  
Router.delete('/:id', async(req, res) => {
  Tw.destroy({
    where: {
      id:req.params.id
    }
  })
  .then(async tw => {
    res.status(204).json({
      'message': 'Le message à bien été supprimé !'
    })
  })
  .catch(err => {
    res.status(500).json({ 'erreur': err})
  });
});


module.exports = Router;
