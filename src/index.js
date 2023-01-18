const express = require('express');
const app = express();
const minimist = require('minimist');
const dotenv = require("dotenv");

dotenv.config();
const argumentos = minimist(process.argv.slice(2));
const PORT = argumentos.puerto || 8080;

console.log(argumentos);

app.get('/api/randoms', (req, res) => {
  console.log('Resolving - Endpoint');
  res.json({
    pid: process.pid,
    msg: `Mensaje desde el puerto ${PORT}`,
  });
});

app.listen(PORT, () =>
  console.log(`Server ready. Escuchando en el port: ${PORT} - PID WORKER ${process.pid}`));