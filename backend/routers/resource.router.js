const express = require("express");
const resourceRouter = express.Router();
const roleController = require("../controllers/role.controller");
const categoryController = require("../controllers/category.controller");
const seatTypeController = require("../controllers/seatType.controller");
const methodController = require("../controllers/method.controller");
const comboController = require("../controllers/combo.controller");


// build APIs for router
resourceRouter.post("/role", roleController);
resourceRouter.post("/category", categoryController);
resourceRouter.post("/seattype", seatTypeController);
resourceRouter.post("/method", methodController);
resourceRouter.post("/combo", comboController);

module.exports = resourceRouter;