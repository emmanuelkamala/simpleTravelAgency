const express = require('express');
const router = express.Router();

module.exports = function(){
    router.use('/', (req, res) => {
        res.send('Index')
    })

    router.use('/about', (req,res) => {
        res.send('About Us')
    })

    return router
}