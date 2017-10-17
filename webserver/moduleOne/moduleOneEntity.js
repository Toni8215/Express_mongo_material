var mongoose = require('mongoose');

const schema = new mongoose.Schema({
    
      
        "id":  { type: Number, required: true },
        "name":  { type: String, required: true },
        "owner": {
          "avatar_url": { type: String, required:true }
        },
        "created_at":  { type: String, required: true },
        "updated_at":  { type: String, required: true },
     
      },{collection:'repos',versionKey:false});

  schema.index({id: 1}, {unique: true});
  
  const model = mongoose.model('repos', schema);
  
  module.exports = {
    Model: model  };

