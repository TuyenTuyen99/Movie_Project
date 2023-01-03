const express = require("express");
const resourceRouter = express.Router();
const roleController = require("../controllers/role.controller");
const categoryController = require("../controllers/category.controller");
const seatTypeController = require("../controllers/seatType.controller");
const methodController = require("../controllers/method.controller");
const {
  addNewCombo,
  getAllCombos,
} = require("../controllers/combo.controller");
const { addNewSeat, getAllSeat } = require("../controllers/seat.controller");
const {
  scheduleController,
  getAllSchedules,
  getSchedule,
} = require("../controllers/schedule.controller");

// build APIs for router
resourceRouter.post("/role", roleController);
resourceRouter.post("/category", categoryController);
resourceRouter.post("/seattype", seatTypeController);
resourceRouter.post("/method", methodController);
resourceRouter.post("/combo", addNewCombo);
resourceRouter.get("/combo", getAllCombos);
resourceRouter.post("/seats", addNewSeat);
resourceRouter.get("/seats", getAllSeat);
resourceRouter.post("/schedule", scheduleController);
resourceRouter.get("/schedule", getAllSchedules);
resourceRouter.get("/:id", getSchedule);

module.exports = resourceRouter;
