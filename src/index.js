const express = require("express");
const morgan = require("morgan");
const sequelize = require("./db.js");
const cors = require("cors");

const taskRoutes = require("./routes/tasks.routes");
require("./models/Task.js");
const app = express();

app.use(cors());
app.use(morgan("dev"));

app.use(express.json());

app.use(taskRoutes);

async function main() {
  try {
    await sequelize.sync({ alter: true });
    app.listen(3000, () => {
      console.log("Server is running on port 3000.");
    });
  } catch (error) {
    console.log("Unable to connect to the database:", error);
  }
}

main();
