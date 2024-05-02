const mongoose = require('mongoose');


const taskSchema = mongoose.Schema({
    description: { type: String, required: true },
    completed: { type: Boolean, default: false }
  });

const postSchema = mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  date: { type: Date, required: true},
  tasks: { type: [taskSchema], required: false}
});

module.exports = mongoose.model('Post', postSchema, 'posts');