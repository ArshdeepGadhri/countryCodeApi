const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    _id: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true
    },
    code2: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('Post', PostSchema);