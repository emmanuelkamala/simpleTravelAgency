const express = require('express');
const router = express.Router();

module.exports = function(){
    router.get('/', (req, res) => {
        res.render('index', {
            pageTitle: 'Home'
        })
    })

    router.get('/about', (req, res) => {
        res.render('about', {
            pageTitle: 'About Us'
        })
    })

    return router;
}