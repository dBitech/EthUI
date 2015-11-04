'use strict';

exports.findSCAETHFPPUNIN = function(fields) {

  var examples = {};
  
  examples['application/json'] = [ {
  "uniMaximumServiceFrameSize" : "",
  "interfaceStatusMaxVc" : "",
  "interfaceCfgIdentifier" : "aeiou",
  "numberOfLinks" : "",
  "physicalLayer" : "aeiou",
  "interfaceCfgIngressBwp" : {
    "bwpCfgEirMax" : "",
    "bwpCfgCbs" : "",
    "bwpCfgCirMax" : "",
    "bwpCfgCm" : "aeiou",
    "envelopeId" : "aeiou",
    "bwpCfgEbs" : "",
    "rank" : "aeiou",
    "bwpCfgCir" : "",
    "bwpCfgCf" : "aeiou",
    "bwpCfgIdentifier" : "aeiou",
    "bwpCfgEir" : ""
  },
  "uniCfgCeVidUntagged" : "",
  "bundling" : "aeiou",
  "linkOam" : "aeiou",
  "eLMI" : "aeiou",
  "synchronousMode" : "aeiou",
  "physicalLayerDuplexMode" : "aeiou",
  "multiplexing" : "aeiou",
  "allToOneBundling" : "aeiou",
  "ethOvcEndPoint" : {
    "ovcEndPtPerUniCfgRole" : "aeiou",
    "cosCfgPcp" : {
      "cosId" : "aeiou",
      "classOfServiceName" : "aeiou"
    },
    "ovcEndPtPerUniCfgIngressBwp" : {
      "bwpCfgCbs" : "",
      "bwpCfgCm" : "aeiou",
      "bwpCfgEbs" : "",
      "bwpCfgCir" : "",
      "bwpCfgCf" : "aeiou",
      "bwpCfgEir" : ""
    },
    "ovcEndPtPerUniCfgCeVlanMap" : {
      "CeVlanId" : "aeiou",
      "EvcId" : "aeiou"
    },
    "ovcEndPtPerCosCfgEgressBwp" : {
      "bwpCfgCbs" : "",
      "bwpCfgCm" : "aeiou",
      "cosId" : "aeiou",
      "bwpCfgEbs" : "",
      "bwpCfgCir" : "",
      "bwpCfgCf" : "aeiou",
      "bwpCfgEir" : ""
    },
    "ovcEndPtPerUniCfgIdentifier" : "aeiou",
    "cosCfgDscp" : {
      "ipv4" : "aeiou",
      "ipv6" : "aeiou",
      "classOfServiceName" : "aeiou"
    },
    "ovcEndPtPerCosCfgIngressBwp" : "",
    "cosCfgOvcEp" : {
      "classOfServiceName" : "aeiou",
      "ovc" : "aeiou"
    },
    "ovcEndPtPerUniCfgEgressBwp" : ""
  },
  "uniCfgCePriorityUntagged" : "",
  "uniResiliency" : "aeiou",
  "frameFormat" : "aeiou",
  "uniMeg" : "aeiou",
  "uniL2cpServiceAttributes" : {
    "uniL2cpPeering" : {
      "protocolToBePeered" : "aeiou",
      "protocolIdentifier" : {
        "Ethertype" : "aeiou",
        "Subtypes" : "aeiou"
      },
      "linkIdentifier" : "aeiou",
      "l2cpDestinationAddress" : "aeiou"
    },
    "unilL2cpAddressSet" : {
      "assignment8021Q" : "aeiou",
      "filteredBy" : {
        "CTB" : true,
        "CTA" : true,
        "CTB2" : true
      },
      "l2cpDestinationAddress" : "aeiou"
    }
  },
  "transportPort" : {
    "RemoteUnitSlot" : "aeiou",
    "Rack" : "aeiou",
    "Port" : "aeiou",
    "Hostname" : "aeiou",
    "Shelf" : "aeiou",
    "CLLI" : "aeiou",
    "Slot" : "aeiou",
    "Subslot" : "aeiou",
    "RemoteUnit" : "aeiou",
    "href" : "aeiou",
    "Vendor" : "aeiou",
    "RemoteUnitPort" : "aeiou"
  },
  "interfaceCfgEgressBwp" : {
    "bwpCfgEirMax" : "",
    "bwpCfgCbs" : "",
    "BwpCfgCm" : "aeiou",
    "bwpCfgCirMax" : "",
    "envelopeId" : "aeiou",
    "bwpCfgEbs" : "",
    "rank" : "aeiou",
    "bwpCfgCir" : "",
    "BwpCfgEir" : "",
    "bwpCfgCf" : "aeiou",
    "bwpCfgIdentifier" : "aeiou"
  }
} ];
  

  
  if(Object.keys(examples).length > 0)
    return examples[Object.keys(examples)[0]];
  
}
exports.createSCAETHFPPUNIN = function(uni) {

  var examples = {};
  
  examples['application/json'] = {
  "uniMaximumServiceFrameSize" : "",
  "interfaceStatusMaxVc" : "",
  "interfaceCfgIdentifier" : "aeiou",
  "numberOfLinks" : "",
  "physicalLayer" : "aeiou",
  "interfaceCfgIngressBwp" : {
    "bwpCfgEirMax" : "",
    "bwpCfgCbs" : "",
    "bwpCfgCirMax" : "",
    "bwpCfgCm" : "aeiou",
    "envelopeId" : "aeiou",
    "bwpCfgEbs" : "",
    "rank" : "aeiou",
    "bwpCfgCir" : "",
    "bwpCfgCf" : "aeiou",
    "bwpCfgIdentifier" : "aeiou",
    "bwpCfgEir" : ""
  },
  "uniCfgCeVidUntagged" : "",
  "bundling" : "aeiou",
  "linkOam" : "aeiou",
  "eLMI" : "aeiou",
  "synchronousMode" : "aeiou",
  "physicalLayerDuplexMode" : "aeiou",
  "multiplexing" : "aeiou",
  "allToOneBundling" : "aeiou",
  "ethOvcEndPoint" : {
    "ovcEndPtPerUniCfgRole" : "aeiou",
    "cosCfgPcp" : {
      "cosId" : "aeiou",
      "classOfServiceName" : "aeiou"
    },
    "ovcEndPtPerUniCfgIngressBwp" : {
      "bwpCfgCbs" : "",
      "bwpCfgCm" : "aeiou",
      "bwpCfgEbs" : "",
      "bwpCfgCir" : "",
      "bwpCfgCf" : "aeiou",
      "bwpCfgEir" : ""
    },
    "ovcEndPtPerUniCfgCeVlanMap" : {
      "CeVlanId" : "aeiou",
      "EvcId" : "aeiou"
    },
    "ovcEndPtPerCosCfgEgressBwp" : {
      "bwpCfgCbs" : "",
      "bwpCfgCm" : "aeiou",
      "cosId" : "aeiou",
      "bwpCfgEbs" : "",
      "bwpCfgCir" : "",
      "bwpCfgCf" : "aeiou",
      "bwpCfgEir" : ""
    },
    "ovcEndPtPerUniCfgIdentifier" : "aeiou",
    "cosCfgDscp" : {
      "ipv4" : "aeiou",
      "ipv6" : "aeiou",
      "classOfServiceName" : "aeiou"
    },
    "ovcEndPtPerCosCfgIngressBwp" : "",
    "cosCfgOvcEp" : {
      "classOfServiceName" : "aeiou",
      "ovc" : "aeiou"
    },
    "ovcEndPtPerUniCfgEgressBwp" : ""
  },
  "uniCfgCePriorityUntagged" : "",
  "uniResiliency" : "aeiou",
  "frameFormat" : "aeiou",
  "uniMeg" : "aeiou",
  "uniL2cpServiceAttributes" : {
    "uniL2cpPeering" : {
      "protocolToBePeered" : "aeiou",
      "protocolIdentifier" : {
        "Ethertype" : "aeiou",
        "Subtypes" : "aeiou"
      },
      "linkIdentifier" : "aeiou",
      "l2cpDestinationAddress" : "aeiou"
    },
    "unilL2cpAddressSet" : {
      "assignment8021Q" : "aeiou",
      "filteredBy" : {
        "CTB" : true,
        "CTA" : true,
        "CTB2" : true
      },
      "l2cpDestinationAddress" : "aeiou"
    }
  },
  "transportPort" : {
    "RemoteUnitSlot" : "aeiou",
    "Rack" : "aeiou",
    "Port" : "aeiou",
    "Hostname" : "aeiou",
    "Shelf" : "aeiou",
    "CLLI" : "aeiou",
    "Slot" : "aeiou",
    "Subslot" : "aeiou",
    "RemoteUnit" : "aeiou",
    "href" : "aeiou",
    "Vendor" : "aeiou",
    "RemoteUnitPort" : "aeiou"
  },
  "interfaceCfgEgressBwp" : {
    "bwpCfgEirMax" : "",
    "bwpCfgCbs" : "",
    "BwpCfgCm" : "aeiou",
    "bwpCfgCirMax" : "",
    "envelopeId" : "aeiou",
    "bwpCfgEbs" : "",
    "rank" : "aeiou",
    "bwpCfgCir" : "",
    "BwpCfgEir" : "",
    "bwpCfgCf" : "aeiou",
    "bwpCfgIdentifier" : "aeiou"
  }
};
  

  
  if(Object.keys(examples).length > 0)
    return examples[Object.keys(examples)[0]];
  
}
exports.getSCAETHFPPUNIN = function(uniID, fields) {

  var examples = {};
  
  examples['application/json'] = {
  "uniMaximumServiceFrameSize" : "",
  "interfaceStatusMaxVc" : "",
  "interfaceCfgIdentifier" : "aeiou",
  "numberOfLinks" : "",
  "physicalLayer" : "aeiou",
  "interfaceCfgIngressBwp" : {
    "bwpCfgEirMax" : "",
    "bwpCfgCbs" : "",
    "bwpCfgCirMax" : "",
    "bwpCfgCm" : "aeiou",
    "envelopeId" : "aeiou",
    "bwpCfgEbs" : "",
    "rank" : "aeiou",
    "bwpCfgCir" : "",
    "bwpCfgCf" : "aeiou",
    "bwpCfgIdentifier" : "aeiou",
    "bwpCfgEir" : ""
  },
  "uniCfgCeVidUntagged" : "",
  "bundling" : "aeiou",
  "linkOam" : "aeiou",
  "eLMI" : "aeiou",
  "synchronousMode" : "aeiou",
  "physicalLayerDuplexMode" : "aeiou",
  "multiplexing" : "aeiou",
  "allToOneBundling" : "aeiou",
  "ethOvcEndPoint" : {
    "ovcEndPtPerUniCfgRole" : "aeiou",
    "cosCfgPcp" : {
      "cosId" : "aeiou",
      "classOfServiceName" : "aeiou"
    },
    "ovcEndPtPerUniCfgIngressBwp" : {
      "bwpCfgCbs" : "",
      "bwpCfgCm" : "aeiou",
      "bwpCfgEbs" : "",
      "bwpCfgCir" : "",
      "bwpCfgCf" : "aeiou",
      "bwpCfgEir" : ""
    },
    "ovcEndPtPerUniCfgCeVlanMap" : {
      "CeVlanId" : "aeiou",
      "EvcId" : "aeiou"
    },
    "ovcEndPtPerCosCfgEgressBwp" : {
      "bwpCfgCbs" : "",
      "bwpCfgCm" : "aeiou",
      "cosId" : "aeiou",
      "bwpCfgEbs" : "",
      "bwpCfgCir" : "",
      "bwpCfgCf" : "aeiou",
      "bwpCfgEir" : ""
    },
    "ovcEndPtPerUniCfgIdentifier" : "aeiou",
    "cosCfgDscp" : {
      "ipv4" : "aeiou",
      "ipv6" : "aeiou",
      "classOfServiceName" : "aeiou"
    },
    "ovcEndPtPerCosCfgIngressBwp" : "",
    "cosCfgOvcEp" : {
      "classOfServiceName" : "aeiou",
      "ovc" : "aeiou"
    },
    "ovcEndPtPerUniCfgEgressBwp" : ""
  },
  "uniCfgCePriorityUntagged" : "",
  "uniResiliency" : "aeiou",
  "frameFormat" : "aeiou",
  "uniMeg" : "aeiou",
  "uniL2cpServiceAttributes" : {
    "uniL2cpPeering" : {
      "protocolToBePeered" : "aeiou",
      "protocolIdentifier" : {
        "Ethertype" : "aeiou",
        "Subtypes" : "aeiou"
      },
      "linkIdentifier" : "aeiou",
      "l2cpDestinationAddress" : "aeiou"
    },
    "unilL2cpAddressSet" : {
      "assignment8021Q" : "aeiou",
      "filteredBy" : {
        "CTB" : true,
        "CTA" : true,
        "CTB2" : true
      },
      "l2cpDestinationAddress" : "aeiou"
    }
  },
  "transportPort" : {
    "RemoteUnitSlot" : "aeiou",
    "Rack" : "aeiou",
    "Port" : "aeiou",
    "Hostname" : "aeiou",
    "Shelf" : "aeiou",
    "CLLI" : "aeiou",
    "Slot" : "aeiou",
    "Subslot" : "aeiou",
    "RemoteUnit" : "aeiou",
    "href" : "aeiou",
    "Vendor" : "aeiou",
    "RemoteUnitPort" : "aeiou"
  },
  "interfaceCfgEgressBwp" : {
    "bwpCfgEirMax" : "",
    "bwpCfgCbs" : "",
    "BwpCfgCm" : "aeiou",
    "bwpCfgCirMax" : "",
    "envelopeId" : "aeiou",
    "bwpCfgEbs" : "",
    "rank" : "aeiou",
    "bwpCfgCir" : "",
    "BwpCfgEir" : "",
    "bwpCfgCf" : "aeiou",
    "bwpCfgIdentifier" : "aeiou"
  }
};
  

  
  if(Object.keys(examples).length > 0)
    return examples[Object.keys(examples)[0]];
  
}
exports.deleteSCAETHFPPUNIN = function(uniID) {

  var examples = {};
  

  
}
exports.patchSCAETHFPPUNIN = function(uniID, individual) {

  var examples = {};
  
  examples['application/json'] = {
  "uniMaximumServiceFrameSize" : "",
  "interfaceStatusMaxVc" : "",
  "interfaceCfgIdentifier" : "aeiou",
  "numberOfLinks" : "",
  "physicalLayer" : "aeiou",
  "interfaceCfgIngressBwp" : {
    "bwpCfgEirMax" : "",
    "bwpCfgCbs" : "",
    "bwpCfgCirMax" : "",
    "bwpCfgCm" : "aeiou",
    "envelopeId" : "aeiou",
    "bwpCfgEbs" : "",
    "rank" : "aeiou",
    "bwpCfgCir" : "",
    "bwpCfgCf" : "aeiou",
    "bwpCfgIdentifier" : "aeiou",
    "bwpCfgEir" : ""
  },
  "uniCfgCeVidUntagged" : "",
  "bundling" : "aeiou",
  "linkOam" : "aeiou",
  "eLMI" : "aeiou",
  "synchronousMode" : "aeiou",
  "physicalLayerDuplexMode" : "aeiou",
  "multiplexing" : "aeiou",
  "allToOneBundling" : "aeiou",
  "ethOvcEndPoint" : {
    "ovcEndPtPerUniCfgRole" : "aeiou",
    "cosCfgPcp" : {
      "cosId" : "aeiou",
      "classOfServiceName" : "aeiou"
    },
    "ovcEndPtPerUniCfgIngressBwp" : {
      "bwpCfgCbs" : "",
      "bwpCfgCm" : "aeiou",
      "bwpCfgEbs" : "",
      "bwpCfgCir" : "",
      "bwpCfgCf" : "aeiou",
      "bwpCfgEir" : ""
    },
    "ovcEndPtPerUniCfgCeVlanMap" : {
      "CeVlanId" : "aeiou",
      "EvcId" : "aeiou"
    },
    "ovcEndPtPerCosCfgEgressBwp" : {
      "bwpCfgCbs" : "",
      "bwpCfgCm" : "aeiou",
      "cosId" : "aeiou",
      "bwpCfgEbs" : "",
      "bwpCfgCir" : "",
      "bwpCfgCf" : "aeiou",
      "bwpCfgEir" : ""
    },
    "ovcEndPtPerUniCfgIdentifier" : "aeiou",
    "cosCfgDscp" : {
      "ipv4" : "aeiou",
      "ipv6" : "aeiou",
      "classOfServiceName" : "aeiou"
    },
    "ovcEndPtPerCosCfgIngressBwp" : "",
    "cosCfgOvcEp" : {
      "classOfServiceName" : "aeiou",
      "ovc" : "aeiou"
    },
    "ovcEndPtPerUniCfgEgressBwp" : ""
  },
  "uniCfgCePriorityUntagged" : "",
  "uniResiliency" : "aeiou",
  "frameFormat" : "aeiou",
  "uniMeg" : "aeiou",
  "uniL2cpServiceAttributes" : {
    "uniL2cpPeering" : {
      "protocolToBePeered" : "aeiou",
      "protocolIdentifier" : {
        "Ethertype" : "aeiou",
        "Subtypes" : "aeiou"
      },
      "linkIdentifier" : "aeiou",
      "l2cpDestinationAddress" : "aeiou"
    },
    "unilL2cpAddressSet" : {
      "assignment8021Q" : "aeiou",
      "filteredBy" : {
        "CTB" : true,
        "CTA" : true,
        "CTB2" : true
      },
      "l2cpDestinationAddress" : "aeiou"
    }
  },
  "transportPort" : {
    "RemoteUnitSlot" : "aeiou",
    "Rack" : "aeiou",
    "Port" : "aeiou",
    "Hostname" : "aeiou",
    "Shelf" : "aeiou",
    "CLLI" : "aeiou",
    "Slot" : "aeiou",
    "Subslot" : "aeiou",
    "RemoteUnit" : "aeiou",
    "href" : "aeiou",
    "Vendor" : "aeiou",
    "RemoteUnitPort" : "aeiou"
  },
  "interfaceCfgEgressBwp" : {
    "bwpCfgEirMax" : "",
    "bwpCfgCbs" : "",
    "BwpCfgCm" : "aeiou",
    "bwpCfgCirMax" : "",
    "envelopeId" : "aeiou",
    "bwpCfgEbs" : "",
    "rank" : "aeiou",
    "bwpCfgCir" : "",
    "BwpCfgEir" : "",
    "bwpCfgCf" : "aeiou",
    "bwpCfgIdentifier" : "aeiou"
  }
};
  

  
  if(Object.keys(examples).length > 0)
    return examples[Object.keys(examples)[0]];
  
}
