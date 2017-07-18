const express = require('express');
const path = require('path');
const app = express();
const {articles} = require('./src/articles.json')
const {comments} = require('./src/comments.json')

if(process.env.NODE_ENV !== 'development') {
  app.use(express.static(path.join(__dirname, 'build')));
}

app.get('/api/articles', (req, res) => {
  res.status(200).json({articles});
})

app.get('/api/articles/:id/comments', (req, res) => {
  const artId = req.params.id
  const artCommets = comments.filter(comment => comment.articleId == artId)
  res.status(200).json({comments: artCommets});
})

app.listen(8080);

console.log('Serving from port 8080')