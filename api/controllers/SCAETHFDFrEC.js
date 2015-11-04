'use strict';

var url = require('url');


var SCAETHFDFrEC = require('./SCAETHFDFrECService');


module.exports.sCAETHFDFrECPost = function sCAETHFDFrECPost (req, res, next) {
  var sCAETHFDFrEC = req.swagger.params['SCA_ETH_FDFr_EC'].value;
  

  var result = SCAETHFDFrEC.sCAETHFDFrECPost(sCAETHFDFrEC);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.findSCAETHFDFrECByState = function findSCAETHFDFrECByState (req, res, next) {
  var state = req.swagger.params['state'].value;
  

  var result = SCAETHFDFrEC.findSCAETHFDFrECByState(state);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.findSCAETHFDFrECById = function findSCAETHFDFrECById (req, res, next) {
  var id = req.swagger.params['id'].value;
  

  var result = SCAETHFDFrEC.findSCAETHFDFrECById(id);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.deleteSCAETHFDFrEC = function deleteSCAETHFDFrEC (req, res, next) {
  var id = req.swagger.params['id'].value;
  

  var result = SCAETHFDFrEC.deleteSCAETHFDFrEC(id);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.sCAETHFDFrECIdPatch = function sCAETHFDFrECIdPatch (req, res, next) {
  var id = req.swagger.params['id'].value;
  var state = req.swagger.params['state'].value;
  

  var result = SCAETHFDFrEC.sCAETHFDFrECIdPatch(id, state);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};
