const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//first we define the scheema that the model will use
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

//then we create a model based on the space schema
const Space = mongoose.model('Space', spaceSchema);

module.exports = Space;