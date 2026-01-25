const express = require("express")
const router = express.Router()

const {getAllTasks, createTask, getTask, updateTask, deleteTask} = require('../controllers/tasks')

router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)

module.exports = router 

// mongodb+srv://FrozzenIce:Kenney24ps24+@taskmanager.v7n6jdp.mongodb.net/?appName=TaskManager