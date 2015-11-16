'use strict';

// global variables
var unirest = require('unirest');
var controllerLocation = 'http://localhost:8080/hacker/api/mef/sca/v1/SCA_ETH_FDFr_EC';
var aNode = "10.24.10.60";
var iNode = "10.24.10.61";
var zNode = "10.24.10.62";
var aNodeINNI = '6';
var zNodeINNI = '6';
var iNodeaINNI = '5';
var iNodezINNI = '6';

var SCA_ETH_FDFr_EC = {
  "SCA_ETH_Flow_Points": [
    {
      "classOfServiceIdentifierEvc": {
        "classOfServiceName": "string",
        "evc": "string"
      },
      "classOfServiceIdentifierIp": {
        "classOfServiceName": "string",
        "ipv4": "string",
        "ipv6": "string"
      },
      "classOfServiceIdentifierL2CP": {
        "L2cpEvcGrpEntry": "string",
        "classOfServiceName": "string"
      },
      "classOfServiceIdentifierPcp": {
        "classOfServiceName": "string",
        "cosId": "string"
      },
      "classOfServiceIdentifierSOAM": {
        "classOfServiceName": "string"
      },
      "colorIdentifier": {
        "colorIdentifierBasedOnEvc": {
          "color": "string",
          "evcId": "string"
        }
      },
      "egressBandwidthProfilePerEgressEquivalenceClassIdentifier": {
        "bwpCfgCbs": 0,
        "bwpCfgCf": "string",
        "bwpCfgCir": 0,
        "bwpCfgCirMax": 0,
        "bwpCfgCm": "string",
        "bwpCfgEbs": 0,
        "bwpCfgEir": 0,
        "bwpCfgEirMax": 0,
        "bwpCfgIdentifier": "string",
        "coS": "string",
        "envelopeId": "string",
        "rank": "string"
      },
      "egressBandwidthProfilePerEvc": {
        "bwpCfgCbs": 0,
        "bwpCfgCf": "string",
        "bwpCfgCir": 0,
        "bwpCfgCirMax": 0,
        "bwpCfgCm": "string",
        "bwpCfgEbs": 0,
        "bwpCfgEir": 0,
        "bwpCfgEirMax": 0,
        "bwpCfgIdentifier": "string",
        "envelopeId": "string",
        "rank": "string"
      },
      "egressEquivalenceClassIdentifierCos": {
        "cosId": "string",
        "egressEquivalenceClass": "string"
      },
      "egressEquivalenceClassIdentifierEvc": {
        "egressEquivalenceClass": "string",
        "evc": "string"
      },
      "egressEquivalenceClassIdentifierIp": {
        "egressEquivalenceClass": "string",
        "ipv4": "string",
        "ipv6": "string"
      },
      "egressEquivalenceClassIdentifierL2CP": {
        "L2cpEvcGrpEntry": "string",
        "egressEquivalenceClass": "string"
      },
      "egressEquivalenceClassIdentifierSOAM": {
        "egressEquivalenceClass": "string"
      },
      "evcPerUniCfgIdentifier": "string",
      "ingressBandwidthProfilePerClassOfServiceIdentifier": {
        "BwpCfgEbs": 0,
        "bwpCfgCbs": 0,
        "bwpCfgCf": "string",
        "bwpCfgCir": 0,
        "bwpCfgCirMax": 0,
        "bwpCfgCm": "string",
        "bwpCfgEir": 0,
        "bwpCfgEirMax": 0,
        "bwpCfgIdentifier": "string",
        "coS": "string",
        "envelopeId": "string",
        "rank": "string"
      },
      "ingressBandwidthProfilePerEvc": {
        "bwpCfgCbs": 0,
        "bwpCfgCf": "string",
        "bwpCfgCir": 0,
        "bwpCfgCirMax": 0,
        "bwpCfgCm": "string",
        "bwpCfgEbs": 0,
        "bwpCfgEir": 0,
        "bwpCfgEirMax": 0,
        "bwpCfgIdentifier": "string",
        "envelopeId": "string",
        "rank": "string"
      },
      "scaEthFppUniN": {
        "allToOneBundling": "string",
        "bundling": "string",
        "ceVlanId": "",
        "eLMI": "string",
        "ethOvcEndPoint": {
          "cosCfgDscp": {
            "classOfServiceName": "string",
            "ipv4": "string",
            "ipv6": "string"
          },
          "cosCfgOvcEp": {
            "classOfServiceName": "string",
            "ovc": "string"
          },
          "cosCfgPcp": {
            "classOfServiceName": "string",
            "cosId": "string"
          },
          "ovcEndPtPerCosCfgEgressBwp": {
            "bwpCfgCbs": 0,
            "bwpCfgCf": "string",
            "bwpCfgCir": 0,
            "bwpCfgCm": "string",
            "bwpCfgEbs": 0,
            "bwpCfgEir": 0,
            "cosId": "string"
          },
          "ovcEndPtPerCosCfgIngressBwp": {
            "bwpCfgCbs": 0,
            "bwpCfgCf": "string",
            "bwpCfgCir": 0,
            "bwpCfgCm": "string",
            "bwpCfgEbs": 0,
            "bwpCfgEir": 0,
            "cosId": "string"
          },
          "ovcEndPtPerUniCfgCeVlanMap": {
            "CeVlanId": "",
            "EvcId": "string"
          },
          "ovcEndPtPerUniCfgEgressBwp": {
            "bwpCfgCbs": 0,
            "bwpCfgCf": "string",
            "bwpCfgCir": 0,
            "bwpCfgCm": "string",
            "bwpCfgEbs": 0,
            "bwpCfgEir": 0
          },
          "ovcEndPtPerUniCfgIdentifier": "string",
          "ovcEndPtPerUniCfgIngressBwp": {
            "bwpCfgCbs": 0,
            "bwpCfgCf": "string",
            "bwpCfgCir": 0,
            "bwpCfgCm": "string",
            "bwpCfgEbs": 0,
            "bwpCfgEir": 0
          },
          "ovcEndPtPerUniCfgRole": "string"
        },
        "evcId": "string",
        "frameFormat": "string",
        "interfaceCfgEgressBwp": {
          "BwpCfgCm": "string",
          "BwpCfgEir": 0,
          "bwpCfgCbs": 0,
          "bwpCfgCf": "string",
          "bwpCfgCir": 0,
          "bwpCfgCirMax": 0,
          "bwpCfgEbs": 0,
          "bwpCfgEirMax": 0,
          "bwpCfgIdentifier": "string",
          "envelopeId": "string",
          "rank": "string"
        },
        "interfaceCfgIdentifier": "string",
        "interfaceCfgIngressBwp": {
          "bwpCfgCbs": 0,
          "bwpCfgCf": "string",
          "bwpCfgCir": 0,
          "bwpCfgCirMax": 0,
          "bwpCfgCm": "string",
          "bwpCfgEbs": 0,
          "bwpCfgEir": 0,
          "bwpCfgEirMax": 0,
          "bwpCfgIdentifier": "string",
          "envelopeId": "string",
          "rank": "string"
        },
        "interfaceStatusMaxVc": 0,
        "linkOam": "string",
        "multiplexing": "string",
        "numberOfLinks": 0,
        "physicalLayer": "string",
        "physicalLayerDuplexMode": "string",
        "synchronousMode": "string",
        "transportPort": {
          "CLLI": "string",
          "Hostname": "string",
          "Port": "string",
          "Rack": "string",
          "RemoteUnit": "string",
          "RemoteUnitPort": "string",
          "RemoteUnitSlot": "string",
          "Shelf": "string",
          "Slot": "string",
          "Subslot": "string",
          "Vendor": "string",
          "href": "string"
        },
        "uniCfgCePriorityUntagged": 0,
        "uniCfgCeVidUntagged": 0,
        "uniL2cpServiceAttributes": {
          "uniL2cpPeering": {
            "l2cpDestinationAddress": "string",
            "linkIdentifier": "string",
            "protocolIdentifier": {
              "Ethertype": "string",
              "Subtypes": "string"
            },
            "protocolToBePeered": "string"
          },
          "unilL2cpAddressSet": {
            "assignment8021Q": "string",
            "filteredBy": {
              "CTA": true,
              "CTB": true,
              "CTB2": true
            },
            "l2cpDestinationAddress": "string"
          }
        },
        "uniMaximumServiceFrameSize": 0,
        "uniMeg": "string",
        "uniResiliency": "string"
      },
      "sourceMacAddressLimit": "string",
      "sourceMacAddressLimitN": 0,
      "sourceMacAddressLimitT": 0,
      "subscriberMegMip": "string",
      "testMeg": "string"
    },
    {
      "classOfServiceIdentifierEvc": {
        "classOfServiceName": "string",
        "evc": "string"
      },
      "classOfServiceIdentifierIp": {
        "classOfServiceName": "string",
        "ipv4": "string",
        "ipv6": "string"
      },
      "classOfServiceIdentifierL2CP": {
        "L2cpEvcGrpEntry": "string",
        "classOfServiceName": "string"
      },
      "classOfServiceIdentifierPcp": {
        "classOfServiceName": "string",
        "cosId": "string"
      },
      "classOfServiceIdentifierSOAM": {
        "classOfServiceName": "string"
      },
      "colorIdentifier": {
        "colorIdentifierBasedOnEvc": {
          "color": "string",
          "evcId": "string"
        }
      },
      "egressBandwidthProfilePerEgressEquivalenceClassIdentifier": {
        "bwpCfgCbs": 0,
        "bwpCfgCf": "string",
        "bwpCfgCir": 0,
        "bwpCfgCirMax": 0,
        "bwpCfgCm": "string",
        "bwpCfgEbs": 0,
        "bwpCfgEir": 0,
        "bwpCfgEirMax": 0,
        "bwpCfgIdentifier": "string",
        "coS": "string",
        "envelopeId": "string",
        "rank": "string"
      },
      "egressBandwidthProfilePerEvc": {
        "bwpCfgCbs": 0,
        "bwpCfgCf": "string",
        "bwpCfgCir": 0,
        "bwpCfgCirMax": 0,
        "bwpCfgCm": "string",
        "bwpCfgEbs": 0,
        "bwpCfgEir": 0,
        "bwpCfgEirMax": 0,
        "bwpCfgIdentifier": "string",
        "envelopeId": "string",
        "rank": "string"
      },
      "egressEquivalenceClassIdentifierCos": {
        "cosId": "string",
        "egressEquivalenceClass": "string"
      },
      "egressEquivalenceClassIdentifierEvc": {
        "egressEquivalenceClass": "string",
        "evc": "string"
      },
      "egressEquivalenceClassIdentifierIp": {
        "egressEquivalenceClass": "string",
        "ipv4": "string",
        "ipv6": "string"
      },
      "egressEquivalenceClassIdentifierL2CP": {
        "L2cpEvcGrpEntry": "string",
        "egressEquivalenceClass": "string"
      },
      "egressEquivalenceClassIdentifierSOAM": {
        "egressEquivalenceClass": "string"
      },
      "evcPerUniCfgIdentifier": "string",
      "ingressBandwidthProfilePerClassOfServiceIdentifier": {
        "BwpCfgEbs": 0,
        "bwpCfgCbs": 0,
        "bwpCfgCf": "string",
        "bwpCfgCir": 0,
        "bwpCfgCirMax": 0,
        "bwpCfgCm": "string",
        "bwpCfgEir": 0,
        "bwpCfgEirMax": 0,
        "bwpCfgIdentifier": "string",
        "coS": "string",
        "envelopeId": "string",
        "rank": "string"
      },
      "ingressBandwidthProfilePerEvc": {
        "bwpCfgCbs": 0,
        "bwpCfgCf": "string",
        "bwpCfgCir": 0,
        "bwpCfgCirMax": 0,
        "bwpCfgCm": "string",
        "bwpCfgEbs": 0,
        "bwpCfgEir": 0,
        "bwpCfgEirMax": 0,
        "bwpCfgIdentifier": "string",
        "envelopeId": "string",
        "rank": "string"
      },
      "scaEthFppUniN": {
        "allToOneBundling": "string",
        "bundling": "string",
        "ceVlanId": "",
        "eLMI": "string",
        "ethOvcEndPoint": {
          "cosCfgDscp": {
            "classOfServiceName": "string",
            "ipv4": "string",
            "ipv6": "string"
          },
          "cosCfgOvcEp": {
            "classOfServiceName": "string",
            "ovc": "string"
          },
          "cosCfgPcp": {
            "classOfServiceName": "string",
            "cosId": "string"
          },
          "ovcEndPtPerCosCfgEgressBwp": {
            "bwpCfgCbs": 0,
            "bwpCfgCf": "string",
            "bwpCfgCir": 0,
            "bwpCfgCm": "string",
            "bwpCfgEbs": 0,
            "bwpCfgEir": 0,
            "cosId": "string"
          },
          "ovcEndPtPerCosCfgIngressBwp": {
            "bwpCfgCbs": 0,
            "bwpCfgCf": "string",
            "bwpCfgCir": 0,
            "bwpCfgCm": "string",
            "bwpCfgEbs": 0,
            "bwpCfgEir": 0,
            "cosId": "string"
          },
          "ovcEndPtPerUniCfgCeVlanMap": {
            "CeVlanId": "",
            "EvcId": "string"
          },
          "ovcEndPtPerUniCfgEgressBwp": {
            "bwpCfgCbs": 0,
            "bwpCfgCf": "string",
            "bwpCfgCir": 0,
            "bwpCfgCm": "string",
            "bwpCfgEbs": 0,
            "bwpCfgEir": 0
          },
          "ovcEndPtPerUniCfgIdentifier": "string",
          "ovcEndPtPerUniCfgIngressBwp": {
            "bwpCfgCbs": 0,
            "bwpCfgCf": "string",
            "bwpCfgCir": 0,
            "bwpCfgCm": "string",
            "bwpCfgEbs": 0,
            "bwpCfgEir": 0
          },
          "ovcEndPtPerUniCfgRole": "string"
        },
        "evcId": "string",
        "frameFormat": "string",
        "interfaceCfgEgressBwp": {
          "BwpCfgCm": "string",
          "BwpCfgEir": 0,
          "bwpCfgCbs": 0,
          "bwpCfgCf": "string",
          "bwpCfgCir": 0,
          "bwpCfgCirMax": 0,
          "bwpCfgEbs": 0,
          "bwpCfgEirMax": 0,
          "bwpCfgIdentifier": "string",
          "envelopeId": "string",
          "rank": "string"
        },
        "interfaceCfgIdentifier": "string",
        "interfaceCfgIngressBwp": {
          "bwpCfgCbs": 0,
          "bwpCfgCf": "string",
          "bwpCfgCir": 0,
          "bwpCfgCirMax": 0,
          "bwpCfgCm": "string",
          "bwpCfgEbs": 0,
          "bwpCfgEir": 0,
          "bwpCfgEirMax": 0,
          "bwpCfgIdentifier": "string",
          "envelopeId": "string",
          "rank": "string"
        },
        "interfaceStatusMaxVc": 0,
        "linkOam": "string",
        "multiplexing": "string",
        "numberOfLinks": 0,
        "physicalLayer": "string",
        "physicalLayerDuplexMode": "string",
        "synchronousMode": "string",
        "transportPort": {
          "CLLI": "string",
          "Hostname": "string",
          "Port": "string",
          "Rack": "string",
          "RemoteUnit": "string",
          "RemoteUnitPort": "string",
          "RemoteUnitSlot": "string",
          "Shelf": "string",
          "Slot": "string",
          "Subslot": "string",
          "Vendor": "string",
          "href": "string"
        },
        "uniCfgCePriorityUntagged": 0,
        "uniCfgCeVidUntagged": 0,
        "uniL2cpServiceAttributes": {
          "uniL2cpPeering": {
            "l2cpDestinationAddress": "string",
            "linkIdentifier": "string",
            "protocolIdentifier": {
              "Ethertype": "string",
              "Subtypes": "string"
            },
            "protocolToBePeered": "string"
          },
          "unilL2cpAddressSet": {
            "assignment8021Q": "string",
            "filteredBy": {
              "CTA": true,
              "CTB": true,
              "CTB2": true
            },
            "l2cpDestinationAddress": "string"
          }
        },
        "uniMaximumServiceFrameSize": 0,
        "uniMeg": "string",
        "uniResiliency": "string"
      },
      "sourceMacAddressLimit": "string",
      "sourceMacAddressLimitN": 0,
      "sourceMacAddressLimitT": 0,
      "subscriberMegMip": "string",
      "testMeg": "string"
    }
  ],
  "SCA_ETH_IVC_End_Points": [
    {
      "interfaceDescription": "string",
      "mtu": "string",
      "scaEthFppInniN": {
        "interfaceDescription": "string",
        "mtu": "string",
        "speed": "string",
        "transport": {
          "CLLI": "string",
          "Hostname": "string",
          "Port": "string",
          "Rack": "string",
          "RemoteUnit": "string",
          "RemoteUnitPort": "string",
          "RemoteUnitSlot": "string",
          "Shelf": "string",
          "Slot": "string",
          "Subslot": "string",
          "Vendor": "string"
        }
      },
      "speed": "string",
      "stag": "string",
      "tpid": "string"
    },
    {
      "interfaceDescription": "string",
      "mtu": "string",
      "scaEthFppInniN": {
        "interfaceDescription": "string",
        "mtu": "string",
        "speed": "string",
        "transport": {
          "CLLI": "string",
          "Hostname": "string",
          "Port": "string",
          "Rack": "string",
          "RemoteUnit": "string",
          "RemoteUnitPort": "string",
          "RemoteUnitSlot": "string",
          "Shelf": "string",
          "Slot": "string",
          "Subslot": "string",
          "Vendor": "string"
        }
      },
      "speed": "string",
      "stag": "string",
      "tpid": "string"
    }    
  ],
  "evcCfgCeVlanCosPreservation": "Enabled",
  "evcCfgCeVlanIdPreservation": "Enabled",
  "evcCfgIdentifier": "string",
  "evcCfgMtuSize": 0,
  "evcServiceType": "Point_To_Point",
  "evcStatusMaxNumUni": 0,
  "flowDomainId": "string",
  "id": "string",
  "state": "active"
};

exports.getEthSvc = function () {

    var examples = {};

    examples['application/json'] = [{
        "id": 123456789,
        "cos": "Gold",
        "unis": [{
            "id": 123456789
        }],
        "bw": 1,
        "serviceType": "EVP",
        "ennis": [{
            "id": 123456789,
            "ethertype": "88A8",
            "svid": "2000"
        }]
    }];

    if (Object.keys(examples).length > 0)
        return examples[Object.keys(examples)[0]];

};


exports.addEthSvc = function (Ethsvc) {

    //    ['efab5761-490e-44ff-9e28-265bb28d8f35', 'Cane', 'CN 3916', '1', 'device 1 port 1'],
    //    ['66fb6a5d-d19d-417a-a725-03c0c8f46288', 'Cane', 'CN 3916', '2', 'device 1 port 2'],
    //    ['7456c1dd-d825-463d-bbeb-db2c3eefd749', 'Cane', 'CN 3916', '3', 'device 1 port 3'],
    //    ['d6189bb8-4d48-4dda-ba92-b067775a6eb8', 'McCaw', 'CN 3916', '1', 'device 3 port 1'],
    //    ['7e6d8d2e-1854-4d53-9df4-d2c36133dc0c', 'McCaw', 'CN 3916', '2', 'device 3 port 2'],
    //    ['7d058082-bb09-416e-b5e6-73d30575620e', 'McCaw', 'CN 3916', '3', 'device 3 port 3']



    var myvlan = Math.floor(Math.random() * 3899) + 20;

    var FDF = JSON.parse(JSON.stringify(SCA_ETH_FDFr_EC));

    // Top level commands
    FDF.id = Ethsvc.id + "_fdf1";
    FDF.flowDomainId = Ethsvc.id;
    FDF.state = "active";
    FDF.evcCfgMtuSize = 1522;
    FDF.evcCfgIdentifier = Ethsvc.id;
    FDF.evcStatusMaxNumUni = 1;

    // UNI Params for BW
    FDF.SCA_ETH_Flow_Points[0].ingressBandwidthProfilePerEvc.bwpCfgIdentifier = "Per EVC " + Ethsvc.uni[0].id;
    FDF.SCA_ETH_Flow_Points[0].ingressBandwidthProfilePerEvc.bwpCfgCir = Ethsvc.bw*1000;
    FDF.SCA_ETH_Flow_Points[0].ingressBandwidthProfilePerEvc.bwpCfgCbs = Math.round(Ethsvc.bw*1000/60);
    
    FDF.SCA_ETH_Flow_Points[1].ingressBandwidthProfilePerEvc.bwpCfgIdentifier = "Per EVC " + Ethsvc.uni[1].id;
    FDF.SCA_ETH_Flow_Points[1].ingressBandwidthProfilePerEvc.bwpCfgCir = Ethsvc.bw*1000;
    FDF.SCA_ETH_Flow_Points[1].ingressBandwidthProfilePerEvc.bwpCfgCbs = Math.round(Ethsvc.bw*1000/60);

    // CVLAN ID
    FDF.SCA_ETH_Flow_Points[0].scaEthFppUniN.ethOvcEndPoint.ovcEndPtPerUniCfgCeVlanMap.CeVlanId = Ethsvc.uni[0].cvlanId;
    FDF.SCA_ETH_Flow_Points[1].scaEthFppUniN.ethOvcEndPoint.ovcEndPtPerUniCfgCeVlanMap.CeVlanId = Ethsvc.uni[1].cvlanId;
    


    // INNI Params
    FDF.SCA_ETH_IVC_End_Points[0].interfaceDescription = "Inni1";
    FDF.SCA_ETH_IVC_End_Points[0].scaEthFppInniN.transport.Hostname = aNode;
    FDF.SCA_ETH_IVC_End_Points[0].scaEthFppInniN.transport.Port = aNodeINNI;
    FDF.SCA_ETH_IVC_End_Points[0].scaEthFppInniN.transport.Vendor = "CN 3916";
    FDF.SCA_ETH_IVC_End_Points[0].stag = myvlan;
    FDF.SCA_ETH_IVC_End_Points[0].mtu = "9600";
    FDF.SCA_ETH_IVC_End_Points[0].tpid = "";

    FDF.SCA_ETH_IVC_End_Points[1].interfaceDescription = "Inni2";
    FDF.SCA_ETH_IVC_End_Points[1].scaEthFppInniN.transport.Hostname = zNode;
    FDF.SCA_ETH_IVC_End_Points[1].scaEthFppInniN.transport.Port = zNodeINNI;
    FDF.SCA_ETH_IVC_End_Points[1].scaEthFppInniN.transport.Vendor = "CN 3916";
    FDF.SCA_ETH_IVC_End_Points[1].stag = myvlan;
    FDF.SCA_ETH_IVC_End_Points[1].mtu = "9600";
    FDF.SCA_ETH_IVC_End_Points[1].tpid = "";

    // UNI Params
    //FDF.SCA_ETH_Flow_Points
    FDF.SCA_ETH_Flow_Points[0].scaEthFppUniN.allToOneBundling = "true";
    switch(Ethsvc.uni[0].id) {
        case 'efab5761-490e-44ff-9e28-265bb28d8f35':
        evcPerUniCfgIdentifier
            FDF.SCA_ETH_Flow_Points[0].evcPerUniCfgIdentifier = "efab5761-490e-44ff-9e28-265bb28d8f35";
            FDF.SCA_ETH_Flow_Points[0].scaEthFppUniN.transportPort.Hostname = aNode;
            FDF.SCA_ETH_Flow_Points[0].scaEthFppUniN.transportPort.Port = "1";
            FDF.SCA_ETH_Flow_Points[0].scaEthFppUniN.transportPort.Vendor = "CN 3916";
            break;
        case '66fb6a5d-d19d-417a-a725-03c0c8f46288':
            FDF.SCA_ETH_Flow_Points[0].evcPerUniCfgIdentifier = "66fb6a5d-d19d-417a-a725-03c0c8f46288";
            FDF.SCA_ETH_Flow_Points[0].scaEthFppUniN.transportPort.Hostname = aNode;
            FDF.SCA_ETH_Flow_Points[0].scaEthFppUniN.transportPort.Port = "2";
            FDF.SCA_ETH_Flow_Points[0].scaEthFppUniN.transportPort.Vendor = "CN 3916";
            break;
        case '7456c1dd-d825-463d-bbeb-db2c3eefd749':
            FDF.SCA_ETH_Flow_Points[0].evcPerUniCfgIdentifier = "7456c1dd-d825-463d-bbeb-db2c3eefd749";
            FDF.SCA_ETH_Flow_Points[0].scaEthFppUniN.transportPort.Hostname = aNode;
            FDF.SCA_ETH_Flow_Points[0].scaEthFppUniN.transportPort.Port = "3";
            FDF.SCA_ETH_Flow_Points[0].scaEthFppUniN.transportPort.Vendor = "CN 3916";
            break;
        case 'd6189bb8-4d48-4dda-ba92-b067775a6eb8':
            FDF.SCA_ETH_Flow_Points[0].evcPerUniCfgIdentifier = "d6189bb8-4d48-4dda-ba92-b067775a6eb8";
            FDF.SCA_ETH_Flow_Points[0].scaEthFppUniN.transportPort.Hostname = zNode;
            FDF.SCA_ETH_Flow_Points[0].scaEthFppUniN.transportPort.Port = "1";
            FDF.SCA_ETH_Flow_Points[0].scaEthFppUniN.transportPort.Vendor = "CN 3916";
            break;
        case '7e6d8d2e-1854-4d53-9df4-d2c36133dc0c':
            FDF.SCA_ETH_Flow_Points[0].evcPerUniCfgIdentifier = "7e6d8d2e-1854-4d53-9df4-d2c36133dc0c";
            FDF.SCA_ETH_Flow_Points[0].scaEthFppUniN.transportPort.Hostname = zNode;
            FDF.SCA_ETH_Flow_Points[0].scaEthFppUniN.transportPort.Port = "2";
            FDF.SCA_ETH_Flow_Points[0].scaEthFppUniN.transportPort.Vendor = "CN 3916";
            break;
        case '7d058082-bb09-416e-b5e6-73d30575620e':
            FDF.SCA_ETH_Flow_Points[0].evcPerUniCfgIdentifier = "7d058082-bb09-416e-b5e6-73d30575620e";
            FDF.SCA_ETH_Flow_Points[0].scaEthFppUniN.transportPort.Hostname = zNode;
            FDF.SCA_ETH_Flow_Points[0].scaEthFppUniN.transportPort.Port = "3";
            FDF.SCA_ETH_Flow_Points[0].scaEthFppUniN.transportPort.Vendor = "CN 3916";
            break;
    };





    switch(Ethsvc.uni[1].id) {
        case 'efab5761-490e-44ff-9e28-265bb28d8f35':
            FDF.SCA_ETH_Flow_Points[1].evcPerUniCfgIdentifier = "efab5761-490e-44ff-9e28-265bb28d8f35";
            FDF.SCA_ETH_Flow_Points[1].scaEthFppUniN.transportPort.Hostname = aNode;
            FDF.SCA_ETH_Flow_Points[1].scaEthFppUniN.transportPort.Port = "1";
            FDF.SCA_ETH_Flow_Points[1].scaEthFppUniN.transportPort.Vendor = "CN 3916";
            break;
        case '66fb6a5d-d19d-417a-a725-03c0c8f46288':
            FDF.SCA_ETH_Flow_Points[1].evcPerUniCfgIdentifier = "66fb6a5d-d19d-417a-a725-03c0c8f46288";
            FDF.SCA_ETH_Flow_Points[1].scaEthFppUniN.transportPort.Hostname = aNode;
            FDF.SCA_ETH_Flow_Points[1].scaEthFppUniN.transportPort.Port = "2";
            FDF.SCA_ETH_Flow_Points[1].scaEthFppUniN.transportPort.Vendor = "CN 3916";
            break;
        case '7456c1dd-d825-463d-bbeb-db2c3eefd749':
            FDF.SCA_ETH_Flow_Points[1].evcPerUniCfgIdentifier = "7456c1dd-d825-463d-bbeb-db2c3eefd749";
            FDF.SCA_ETH_Flow_Points[1].scaEthFppUniN.transportPort.Hostname = aNode;
            FDF.SCA_ETH_Flow_Points[1].scaEthFppUniN.transportPort.Port = "3";
            FDF.SCA_ETH_Flow_Points[1].scaEthFppUniN.transportPort.Vendor = "CN 3916";
            break;
        case 'd6189bb8-4d48-4dda-ba92-b067775a6eb8':
            FDF.SCA_ETH_Flow_Points[1].evcPerUniCfgIdentifier = "d6189bb8-4d48-4dda-ba92-b067775a6eb8";
            FDF.SCA_ETH_Flow_Points[1].scaEthFppUniN.transportPort.Hostname = zNode;
            FDF.SCA_ETH_Flow_Points[1].scaEthFppUniN.transportPort.Port = "1";
            FDF.SCA_ETH_Flow_Points[1].scaEthFppUniN.transportPort.Vendor = "CN 3916";
            break;
        case '7e6d8d2e-1854-4d53-9df4-d2c36133dc0c':
            FDF.SCA_ETH_Flow_Points[1].evcPerUniCfgIdentifier = "7e6d8d2e-1854-4d53-9df4-d2c36133dc0c";
            FDF.SCA_ETH_Flow_Points[1].scaEthFppUniN.transportPort.Hostname = zNode;
            FDF.SCA_ETH_Flow_Points[1].scaEthFppUniN.transportPort.Port = "2";
            FDF.SCA_ETH_Flow_Points[1].scaEthFppUniN.transportPort.Vendor = "CN 3916";
            break;
        case '7d058082-bb09-416e-b5e6-73d30575620e':
            FDF.SCA_ETH_Flow_Points[1].evcPerUniCfgIdentifier = "7d058082-bb09-416e-b5e6-73d30575620e";
            FDF.SCA_ETH_Flow_Points[1].scaEthFppUniN.transportPort.Hostname = zNode;
            FDF.SCA_ETH_Flow_Points[1].scaEthFppUniN.transportPort.Port = "3";
            FDF.SCA_ETH_Flow_Points[1].scaEthFppUniN.transportPort.Vendor = "CN 3916";
            break;
    };

    console.log(FDF);

    unirest.post(controllerLocation)
        .header('Accept', 'application/json')
        .header('Content-Type', 'application/json')
        .send(FDF)
        .end(function (response) {
            var fdfresponse = response.body;
            //loop through SCA_ETH_Flow_Points[]
            //copy SCA_ETH_Flow_Points[].id into uni id
            console.log(response.body);
            setupIntermediateNode(response.body);
        });

}

function setupIntermediateNode(fdf) {
    var FDF = JSON.parse(JSON.stringify(SCA_ETH_FDFr_EC));
    FDF.SCA_ETH_Flow_Points = [];
    
    FDF.id = fdf.evcCfgIdentifier + "_fdf2";
    FDF.flowDomainId = fdf.evcCfgIdentifier;
    FDF.state = "active";
    FDF.evcCfgMtuSize = 1522;
    FDF.evcCfgIdentifier = fdf.evcCfgIdentifier;
    FDF.evcStatusMaxNumUni = 1;
    // INNI Params
    FDF.SCA_ETH_IVC_End_Points[0].interfaceDescription = "Inni1";
    FDF.SCA_ETH_IVC_End_Points[0].scaEthFppInniN.transport.Hostname = iNode;
    FDF.SCA_ETH_IVC_End_Points[0].scaEthFppInniN.transport.Port = iNodeaINNI;
    FDF.SCA_ETH_IVC_End_Points[0].scaEthFppInniN.transport.Vendor = "CN 3916";
    FDF.SCA_ETH_IVC_End_Points[0].stag = fdf.SCA_ETH_IVC_End_Points[0].stag;
    FDF.SCA_ETH_IVC_End_Points[0].mtu = "9600";
    FDF.SCA_ETH_IVC_End_Points[0].tpid = "";

    FDF.SCA_ETH_IVC_End_Points[1].interfaceDescription = "Inni2";
    FDF.SCA_ETH_IVC_End_Points[1].scaEthFppInniN.transport.Hostname = iNode;
    FDF.SCA_ETH_IVC_End_Points[1].scaEthFppInniN.transport.Port = iNodezINNI;
    FDF.SCA_ETH_IVC_End_Points[1].scaEthFppInniN.transport.Vendor = "CN 3916";
    FDF.SCA_ETH_IVC_End_Points[1].stag = fdf.SCA_ETH_IVC_End_Points[1].stag;
    FDF.SCA_ETH_IVC_End_Points[1].mtu = "9600";
    FDF.SCA_ETH_IVC_End_Points[1].tpid = "";

    unirest.post(controllerLocation)
        .header('Accept', 'application/json')
        .header('Content-Type', 'application/json')
        .send(FDF)
        .end(function (response) {
            console.log(response.body);
        });
}

exports.getEthSvcbyID = function (id) {

    var examples = {};

    examples['application/json'] = {
        "id": id + "fake",
        "cos": "aeiou",
        "unis": [{
            "id": 123456789
        }],
        "bw": "",
        "serviceType": "aeiou",
        "ennis": [{
            "id": 123456789,
            "ethertype": "aeiou",
            "svid": "aeiou"
        }]
    };


    if (Object.keys(examples).length > 0)
        return examples[Object.keys(examples)[0]];

};
exports.deleteEthSvc = function (id) {

    var examples = {};


};
