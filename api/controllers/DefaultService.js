'use strict';
var unirest = require('unirest');

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
    var controllerLocation = 'http://localhost:8080/hacker/api/mef/sca/v1/SCA_ETH_FDFr_EC';

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
                            "CeVlanId": "string",
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
            }
        ],
        "evcCfgCeVlanCosPreservation": "Enabled",
        "evcCfgCeVlanIdPreservation": "Enabled",
        "evcCfgIdentifier": "string",
        "evcCfgMtuSize": 0,
        "evcServiceType": "Point_To_Point",
        "evcStatusMaxNumUni": 0,
        "id": "string",
        "state": "active"
    };

    SCA_ETH_FDFr_EC.id = Ethsvc.id;
//    SCA_ETH_FDFr_EC.scaEthFppUniN.transportPort.Hostname = Ethsvc.

    console.log(SCA_ETH_FDFr_EC);

    unirest.post(controllerLocation)
        .header('Accept', 'application/json')
        .header('Content-Type', 'application/json')
        .send(SCA_ETH_FDFr_EC)
        .end(function (response) {
            console.log(response.body);
        });

}

function processPostResults(fdf) {
    console.log(fdf);
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
