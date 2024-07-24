const { getTodo, saveTodo, updateTodo, deleteTodo } = require('../Controller/todoController');
const express = require('express');


const router = express.Router();

router.get('/get',getTodo);
router.post('/save',saveTodo);
router.post('/update',updateTodo);
router.post('/delete',deleteTodo);

module.exports = router;