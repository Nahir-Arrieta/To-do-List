const { Router } = require("express");
const {
  getAllTask,
  getTask,
  createTask,
  deleteTask,
  updateTask,
} = require("../controllers/tasks.controllers.js");
const router = Router();

router.get("/task", getAllTask);

router.get("/task/:id", getTask);

router.post("/task", createTask);

router.delete("/task/:id", deleteTask);

router.put("/task/:id", updateTask);

module.exports = router;
