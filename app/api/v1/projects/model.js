const mongoose = require('mongoose')
const { Schema, model } = mongoose
const { v4: uuidv4 } = require('uuid')

const projectSchema = new Schema({
  image: {
    type: String,
    default: "notfound.jpg"
  },
  name: {
    type: String,
    required: [true, 'Nama proyek harus diisi']
  },
  category: {
    type: String,
  },
  href: {
    type: String,
    default: ""
  },
  desc: {
    type: String,
    default: ""
  },
  pinned: {
    type: Boolean,
    default: false
  },
  isDevelopement: {
    type: Boolean,
    default: false
  },
  contribution: {
    type: String,
    default: ""
  }
})

module.exports = model('Projects', projectSchema)
