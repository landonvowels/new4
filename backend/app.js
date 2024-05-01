const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors'); // Ensure you import CORS

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb+srv://landondalevowels:agilehub@agilehubcluster.xvzdh2z.mongodb.net/posts-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Connected to MongoDB!');
  })
  .catch(err => {
    console.error('Failed to connect to MongoDB:', err);
  });

// Middleware for CORS and JSON body parsing
app.use(cors());
app.use(bodyParser.json()); // Use bodyParser to handle JSON requests

// Post model
const Post = require('./post.model'); // Use the existing post model

// API route to get all posts
app.get('/api/posts', (req, res, next) => {
  Post.find()
    .then(posts => {
      res.status(200).json({
        message: 'Posts fetched successfully!',
        posts: posts
      });
    })
    .catch(error => {
      res.status(500).json({ message: 'Failed to fetch posts', error: error });
    });
});

// API route to add a new post
app.post('/api/posts', (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content
  });
  post.save()
    .then(createdPost => {
      res.status(201).json({
        message: 'Post added successfully',
        postId: createdPost._id
      });
    })
    .catch(error => {
      res.status(500).json({ message: 'Failed to add post', error: error });
    });
});

module.exports = app;