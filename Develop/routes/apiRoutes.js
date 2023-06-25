const express = require('express');

const PORT = 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/notes', (req, res) => {
  res.json(`${req.method} method received`);
  // store notes and return them
})

app.post('/notes', (req, res) =>{

})

app.get('')