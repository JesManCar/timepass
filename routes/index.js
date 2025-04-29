const express = require('express');
const routerIndex = express.Router();


routerIndex.get('/', (req, res) => {
    const now = new Date();
    const decoded = new URLSearchParams(req.url);
    const msg = decoded.get('/?msg');
    let txt = `
        <h1>Bienvenido! Son las ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}</h1>
        <a href="/endroute"><button>ENTRAR</button></a>`;
    if(msg!=null) txt+=`<h3>${msg}</h3>`;
    res.send(txt);
});

  
module.exports = routerIndex;
  