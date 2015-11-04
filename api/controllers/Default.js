'use strict';

var url = require('url');


var Default = require('./DefaultService');

module.exports.getEthSvc = function getEthSvc(req, res, next) {
console.log('getEthSvc');
  var result = Default.getEthSvc();
  if (typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  } else
    res.end();

};

module.exports.addEthSvc = function addEthSvc(req, res, next) {

  var service = req.swagger.params['Service'].value;


  var result = Default.addEthSvc(service);

  if (typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  } else
    res.end();
};

module.exports.getEthSvcbyID = function getEthSvcbyID(req, res, next) {
console.log('getEthSvcbyID');
  var id = req.swagger.params['id'].value;


  var result = Default.getEthSvcbyID(id);

  if (typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  } else
    res.end();
};

module.exports.deleteEthSvc = function deleteEthSvc(req, res, next) {
  var id = req.swagger.params['id'].value;


  var result = Default.deleteEthSvc(id);

  if (typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  } else
    res.end();
};


// module.exports.gethtml = function gethtml(req, res, next)
// {
//      app.get('/',function(req,res){
//         res.render('index.html')
//      });
//      app.get('/about',function(req,res){
//         res.render('about.html');
//     });
// }
