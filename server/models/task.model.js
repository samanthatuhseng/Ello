const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true
  },
  date: {type: Date, required: true}
}, {
  timestamps: true,
});

const taskModel = mongoose.model('tasks', taskSchema);

module.exports = taskModel;