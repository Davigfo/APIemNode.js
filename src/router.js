const express = require('express');

const router = express.Router();

const taskscontroller = require('./controllers/taskscontroller.js');
const tasksmiddleware = require('./middlewares/tasksmiddleware.js')

router.get('/tasks', taskscontroller.getAll);
router.post('/tasks', tasksmiddleware.validadeBody, taskscontroller.createTask);
router.delete('/tasks/:id', taskscontroller.deleteTask);
router.put('/tasks/:id', taskscontroller.updateTask)


module.exports = router; 