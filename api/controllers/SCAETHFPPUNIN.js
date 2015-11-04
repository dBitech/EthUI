'use strict';

var url = require('url');


var SCAETHFPPUNIN = require('./SCAETHFPPUNINService');


module.exports.findSCAETHFPPUNIN = function findSCAETHFPPUNIN (req, res, next) {
  var fields = req.swagger.params['fields'].value;
  

  var result = SCAETHFPPUNIN.findSCAETHFPPUNIN(fields);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.createSCAETHFPPUNIN = function createSCAETHFPPUNIN (req, res, next) {
  var uni = req.swagger.params['uni'].value;
  

  var result = SCAETHFPPUNIN.createSCAETHFPPUNIN(uni);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.getSCAETHFPPUNIN = function getSCAETHFPPUNIN (req, res, next) {
  var uniID = req.swagger.params['uniID'].value;
  var fields = req.swagger.params['fields'].value;
  

  var result = SCAETHFPPUNIN.getSCAETHFPPUNIN(uniID, fields);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.deleteSCAETHFPPUNIN = function deleteSCAETHFPPUNIN (req, res, next) {
  var uniID = req.swagger.params['uniID'].value;
  

  var result = SCAETHFPPUNIN.deleteSCAETHFPPUNIN(uniID);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.patchSCAETHFPPUNIN = function patchSCAETHFPPUNIN (req, res, next) {
  var uniID = req.swagger.params['uniID'].value;
  var individual = req.swagger.params['individual'].value;
  

  var result = SCAETHFPPUNIN.patchSCAETHFPPUNIN(uniID, individual);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};
