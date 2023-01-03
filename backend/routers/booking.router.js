const express = require("express");
const addNewBooking = require("../controllers/booking.controller");
const {addNewBookingSeat, seatSold} = require("../controllers/bookingSeat.controller");
const addNewOrderCombo = require("../controllers/orderCombo.controller");
const { getAllSeat } = require("../controllers/seat.controller");
const { verifyToken } = require("../middlewares/verify.middleware");
const bookingRouter = express.Router();

// build APIs for router
bookingRouter.post("/", verifyToken, addNewBooking);
bookingRouter.post("/booking-seat", addNewBookingSeat);
bookingRouter.post("/order-combo", addNewOrderCombo);
bookingRouter.get("/:movieId/:scheduleId/sold-out", seatSold);
bookingRouter.get("/:movieId/:scheduleId/:bookingId", getAllSeat);

module.exports = bookingRouter;