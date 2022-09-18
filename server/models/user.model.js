const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
  role: {
    type: String, required: true
  },
  email: {
    type: String, required: true
  }
}, {
  timestamps: true,
});

const userModel = mongoose.model('users', userSchema);

module.exports = userModel;