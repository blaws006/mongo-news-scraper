// Core packages
const path = require('path');

// Dependencies
const express = require('express');
const hbs = require('hbs');

// Custom Imports

const PORT = 3000;
const app = express();

const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

app.set('view engine', 'hbs');
app.set('views', viewsPath);

hbs.registerPartials(partialsPath);

app.use(express.static(publicDirectoryPath));

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(PORT, () => {
  console.log('Listening on PORT 3000');
});