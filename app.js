const express = require('express');
const indexRouter = require('./routes/index.js');
const endRouteRouter = require('./routes/endroute.js');
const validarHora = require('./middlewares/validarHora.js');
const hora = require('./middlewares/horaMiddleware.js');


const app = express();
const PORT = 3001;



app.get('/endroute', hora, validarHora, endRouteRouter);

app.use('/', indexRouter);


app.listen(PORT, () => {
  console.log('Servidor escuchando en el puerto 3001');
});
