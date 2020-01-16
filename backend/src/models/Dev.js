const mongoose = require('mongoose');
const PointSchema = require('./Utils/PointSchema'); 


const Devschema = mongoose.Schema({
    name:String,
    github_username:String,
    bio:String,
    avatar_url:String,
    techs:[String],
    location: {
        type: PointSchema,
        index:'2dsphere'
    }
});
module.exports = mongoose.model('Dev', Devschema);
