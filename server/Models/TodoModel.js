const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
    text: {
        type: String,
        required: true,
    }
    });

const TodoModel = mongoose.model('Todo', todoSchema);
module.exports = TodoModel;