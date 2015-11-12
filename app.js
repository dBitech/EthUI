'use strict';
var express = require('express');
var SwaggerExpress = require('swagger-express-mw');
var app = require('express')();
var swaggerTools = require('swagger-tools');
var serverPort = 10010;
var http = require('http');
var swaggerDoc = require('./api/swagger/swagger.json');

// swaggerRouter configuration
var options = {
    swaggerUi: './api/swagger/swagger.json',
    controllers: './api/controllers',
    useStubs: process.env.NODE_ENV === 'development' ? true : false // Conditionally turn on stubs (mock mode)
};

module.exports = app; // for testing

require('./api/controllers/main')(app);
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);


// The Swagger document is located at /api/swagger
// The swagger document contains the starting point of the routing:
//    x-swagger-router-controller: hello_world
//  The above points to: controllers/hello_world.js


swaggerTools.initializeMiddleware(swaggerDoc, function (middleware) {
    // Interpret Swagger resources and attach metadata to request - must be first in swagger-tools middleware chain
    app.use(middleware.swaggerMetadata());

    // Validate Swagger requests
    app.use(middleware.swaggerValidator());

    // Route validated requests to appropriate controller
    app.use(middleware.swaggerRouter(options));

    // Serve the Swagger documents and Swagger UI
    app.use(middleware.swaggerUi());

    // Start the server
    http.createServer(app).listen(serverPort, function () {
        console.log('http://127.0.0.1:%d - Your server', serverPort);
        console.log('http://127.0.0.1:%d/docs - Swagger-ui', serverPort);
    });
});
