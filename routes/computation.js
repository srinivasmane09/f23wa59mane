var express = require('express');
var router = express.Router();
/* GET users listing. */
router.get('/', function (req, res, next) {
    fake_url = "https://fake.com/path" + req.url
    const url = new URL(fake_url)
    const search_params = url.searchParams
    if (req.method === 'GET') {
        value = search_params.get("x")
        if(value === null)
        {
            value=Math.round(Math.random()*999);
        }     
        res.writeHead(200, { 'Content-Type': 'text/html' });
        
        
        res.write('<br>Math.abs() applied to ' + value + ' is ' + Math.abs(value))
        res.write('<br>Math.acos() applied to ' + value + ' is ' + Math.acos(value));
        res.write('<br>Math.sin() applied to ' + value + ' is ' + Math.sin(value))
        res.write('<br>Math.sinh() applied to ' + value + ' is ' + Math.sinh(value));
    

        res.end()
    }

});

module.exports = router;