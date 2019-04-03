// Core packages
const path = require('path');

// Dependencies
const express = require('express');

// Custom Imports

const PORT = 3000;
const app = express();

const publicDirectoryPath = path.join(__dirname, '../public');

app.set('view engine', 'hbs');
app.use(express.static(publicDirectoryPath));

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(PORT, () => {
  console.log('Listening on PORT 3000');
});