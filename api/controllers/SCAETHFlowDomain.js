'use strict';

var url = require('url');


var SCAETHFlowDomain = require('./SCAETHFlowDomainService');


module.exports.getSCAETHFlowDomain = function getSCAETHFlowDomain (req, res, next) {
  

  var result = SCAETHFlowDomain.getSCAETHFlowDomain();

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.getSCAETHFlowDomainById = function getSCAETHFlowDomainById (req, res, next) {
  var id = req.swagger.params['id'].value;
  

  var result = SCAETHFlowDomain.getSCAETHFlowDomainById(id);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};
