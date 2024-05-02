const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const Post = require('./post.model');

const app = express();

// MongoDB connect
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

app.use(cors());
app.use(bodyParser.json());

// API route get posts
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

app.get('/api/posts/recent', (req, res, next) => {
  Post.find()
    .sort({ date: 1 }) // Sort by deadline in ascending order
    .limit(3) // Limit the results to 3 documents
    .then(posts => {
      res.status(200).json({
        message: 'Fetched projects with the closest deadlines',
        posts: posts
      });
    })
    .catch(error => {
      res.status(500).json({ message: 'Failed to fetch projects', error: error });
    });
});

// API route add post
app.post('/api/posts', (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content,
    date: req.body.date
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

// API route delete post
app.delete('/api/posts/:id', (req, res, next) => {
  const postId = req.params.id;
  Post.deleteOne({ _id: postId })
    .then(result => {
      if (result.deletedCount > 0) {
        res.status(200).json({ message: 'Post deleted successfully' });
      } else {
        res.status(404).json({ message: 'Post not found' });
      }
    })
    .catch(error => {
      res.status(500).json({ message: 'Failed to delete post', error: error });
    });
});


module.exports = app;