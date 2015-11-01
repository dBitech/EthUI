'use strict';

exports.getEthSvc = function() {

  var examples = {};

  examples['application/json'] = [ {
  "id" : 123456789,
  "cos" : "Gold",
  "unis" : [ {
    "id" : 123456789
  } ],
  "bwAmount" : 1,
  "serviceType" : "EVP",
  "ennis" : [ {
    "id" : 123456789,
    "ethertype" : "88A8",
    "svid" : "2000"
  } ]
} ];

  if(Object.keys(examples).length > 0)
    return examples[Object.keys(examples)[0]];

}


exports.addEthSvc = function(service) {

  var examples = {};

  examples['application/json'] = service;
console.log(examples);
  if(Object.keys(examples).length > 0)
    return examples[Object.keys(examples)[0]];

}

exports.getEthSvcbyID = function(id) {

  var examples = {};

  examples['application/json'] = {
  "id" : id + "fake",
  "cos" : "aeiou",
  "unis" : [ {
    "id" : 123456789
  } ],
  "bwAmount" : "",
  "serviceType" : "aeiou",
  "ennis" : [ {
    "id" : 123456789,
    "ethertype" : "aeiou",
    "svid" : "aeiou"
  } ]
};



  if(Object.keys(examples).length > 0)
    return examples[Object.keys(examples)[0]];

}
exports.deleteEthSvc = function(id) {

  var examples = {};



}
