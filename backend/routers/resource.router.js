const express = require("express");
const resourceRouter = express.Router();
const roleController = require("../controllers/role.controller");
const categoryController = require("../controllers/category.controller");
const seatTypeController = require("../controllers/seatType.controller");
const methodController = require("../controllers/method.controller");
const comboController = require("../controllers/combo.controller");
const seatController = require("../controllers/seat.controller");
const {
  scheduleController,
  getSchedule,
} = require("../controllers/schedule.controller");

// build APIs for router
resourceRouter.post("/role", roleController);
resourceRouter.post("/category", categoryController);
resourceRouter.post("/seattype", seatTypeController);
resourceRouter.post("/method", methodController);
resourceRouter.post("/combo", comboController);
resourceRouter.post("/seat", seatController);
resourceRouter.post("/schedule", scheduleController);
resourceRouter.get("/schedule", getSchedule);

module.exports = resourceRouter;
