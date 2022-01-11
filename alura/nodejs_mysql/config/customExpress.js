const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');

module.exports = () => {
    const app = express();

    app.user(bodyParser.utlencoded({extended: true}));
    app.user(bodyParser.json());

    consign()
        .include('controllers')
        .into(app)
    
    return app
}

    