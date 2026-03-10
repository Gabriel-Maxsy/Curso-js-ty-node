require('dotenv').config();
const express = require('express');
const app = express();

const mongoose = require('mongoose');

const routes = require('./routes');
const path = require('path');
const { middlewareGlobal } = require('./src/middlewares/middleware');

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

// Nossos próprios middlewares
app.use(middlewareGlobal);
app.use(routes);

async function start() {
  await mongoose.connect(process.env.CONNECTIONSTRING);

  app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
  });
}

start();
