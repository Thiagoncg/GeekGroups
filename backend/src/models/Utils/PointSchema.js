// MY CORDINATE = LONGITUDE LATITUDE - @-21.2066372,-47.8328526,15z
const mongoose = require('mongoose');

const PointSchema = new mongoose.Schema({
    type:{
        type: String,
        enum:['Point'],
        required: true,
    },
    coordinates:{
        type:[Number],
        require:true,
    },
});

module.exports = PointSchema;