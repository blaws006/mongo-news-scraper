// Core packages

// Dependencies
const express = require('express');


// Custom Imports


const PORT = 3000;
const app = express();

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(PORT, () => {
  console.log('Listening on PORT 3000');
});