const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/api/posts', (req, res, next) => {
  const posts = [
    { title: 'First server-side post', content: 'This is coming from the server' }
  ];
  return res.status(200).json({
    message: 'Posts fetched successfully!',
    posts: posts
  });
});

module.exports = app;