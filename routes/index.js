const express = require('express');
const router = express.Router();

module.exports = function(){
    router.get('/', (req, res) => {
        res.send('Index')
    })

    router.get('/about', (req,res) => {
        res.send('About Us')
    })

    return router
}