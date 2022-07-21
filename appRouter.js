const express = require('express');
const router = express.Router();

router.get('/home',(req,res)=>{
    res.render(__dirname + 'public');
})

module.exports = router;