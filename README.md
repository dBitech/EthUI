# EthUI

##This application provides a UI for provisioning an Ethernet service

```shell
git clone https://github.com/jgroom33/EthUI.git
npm install
nodejs server.js
```

###Web Page Provisioning
Browse to http://127.0.0.1:10010

###Swagger UI
Browse to http://127.0.0.1:10010/docs

###Direct URIs
Browse to http://127.0.0.1:10010/api/ethsvc
Browse to http://127.0.0.1:10010/api/ethsvc/555

###POST to
http://127.0.0.1:10010/api/ethsvc
```json
{
  "id": 0,
  "serviceType": "EP",
  "cos": "Gold",
  "bwAmount": 1,
  "ennis": [
    {
      "id": 0,
      "ethertype": "88A8",
      "svid": "string"
    }
  ],
  "unis": [
    {
      "id": 0
    }
  ]
}
```
