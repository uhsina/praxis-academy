const Router = require('express').Router;
const path = require('path')
const r = Router();


r.get('/',(req, res)=> {
    res.sendFile(path.resolve('public/index.html'))
});

r.get('/home',(req, res)=> {
    res.send('hello guys ngopi sekkkk')
});

r.get('/about-us',(req, res)=> {
    res.send('piye ii piyee iiii')
});

module.exports = r;
