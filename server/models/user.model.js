const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
  email: {
    type: String, required: true
  },
  password: {
    type: String, required: true
  },
  role: {
    type: String, required: true
  }
}, {
  timestamps: true,
});

const userModel = mongoose.model('users', userSchema);

module.exports = userModel;