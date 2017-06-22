const express = require('express');
const path = require('path');
const app = express();
const data = require('./src/articles.json')

if(process.env.NODE_ENV !== 'development') {
  app.use(express.static(path.join(__dirname, 'build')));
}

app.get('/api/articles', (req, res) => {
  res.status(200).json(data);
})

app.listen(8080);

console.log('Serving from port 8080')