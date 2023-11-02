const Task = require("../models/Task.js");

const getAllTask = async (req, res) => {
  try {
    const allTask = await Task.findAll();
    res.status(200).send(allTask);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getTask = async (req, res) => {
  try {
    const { id } = req.params;
    const oneTask = await Task.findOne({
      where: {
        id: id,
      },
    });
    if (!oneTask) {
      return res.status(404).send({ error: "Task not found" });
    }
    res.status(200).send(oneTask);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const createTask = async (req, res) => {
  const { id, title, description } = req.body;
  try {
    const newTask = await Task.create({
      id,
      title,
      description,
    });
    res.status(200).send(newTask);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteOneTask = await Task.destroy({
      where: {
        id: id,
      },
    });
    res.status(200).send("delete task");
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};
const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;

    const [updatedRowsCount] = await Task.update(
      { title, description },
      {
        where: {
          id: id,
        },
      }
    );

    if (updatedRowsCount === 0) {
      return res.status(404).send({ error: "Task not found" });
    }
    res.status(200).send({ message: "Task updated successfully" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = {
  getAllTask,
  getTask,
  createTask,
  deleteTask,
  updateTask,
};
