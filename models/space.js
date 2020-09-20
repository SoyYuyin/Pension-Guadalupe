const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const spaceSchema = new Schema({
  space: {
    type: String,
    required: true,
  },
  details:{
    type:String,
    required: true,
  },
  availability:{
    type: Boolean
  }
}, {timestamps: true});

const Space = mongoose.model('Space', spaceSchema);

module.exports = Space;