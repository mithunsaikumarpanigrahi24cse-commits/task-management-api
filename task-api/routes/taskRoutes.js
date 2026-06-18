const express=require("express");

const router=express.Router();
const auth=require("../middleware/authMiddleware");

router.use(auth); // protect all routes below
const {

createTask,
getTasks,
getTask,
updateTask,
deleteTask

}=require("../Controllers/taskController");

router.route("/")

.post(createTask)

.get(getTasks);

router.route("/:id")

.get(getTask)

.put(updateTask)

.delete(deleteTask);

module.exports=router;