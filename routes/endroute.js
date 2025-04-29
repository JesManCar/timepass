const express = require('express');
const router = express.Router();


router.get('/endroute', (req, res) => {
    res.send(`
            <h1>Bienvenido a la ruta Final</h1>
            <a href="/">Volver</a>`);

});

module.exports = router;
  