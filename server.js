const express = require('express');
const cors = require('cors');
require('dotenv').config()
const app = express();

const port = process.env.PORT || 5000;

app.use(cors())

// Allowing access headers and requests
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Methods',
    'HEAD, OPTIONS, GET, POST, PUT, PATCH, DELETE, CONNECT',
  )
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization',
  )
  next()
})

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.listen(port, () => console.log(`Server is up on http://localhost:${port}`))