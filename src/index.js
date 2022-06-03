const express = require('express');
const cors = require('cors');
const errorMiddleware = require('./middlewares/errorMiddleware');
const router = require('./routes');
require('dotenv').config();

const app = express();
const { PORT } = process.env;

app.use(cors());

app.use(express.json());

app.use(router);

app.use(errorMiddleware);

app.listen((PORT), () => console.log(`conectado na porta ${PORT}`));
