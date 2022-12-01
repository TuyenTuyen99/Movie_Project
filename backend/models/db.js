const { DataTypes } = require("sequelize");
const BookingModel = require("./booking.model");
const BookingSeatModel = require("./bookingseat.model");
const CategoryModel = require("./categories.model");
const ComboModel = require("./combo.model");
const { connection } = require("./connection");
const MethodModel = require("./method.model");
const MovieModel = require("./movies.model");
const OrderComboModel = require("./ordercombo.model");
const PaymentModel = require("./payment.model");
const RoleModel = require("./role.model");
const ScheduleModel = require("./schedule.model");
const SeatModel = require("./seats.model");
const SeatTypeModel = require("./seattype.model");
const UserModel = require("./users.model");

const setAssociation = () => {
  // set association for CategoryModel and MovieModel 1-many
  const option1 = {
    foreignKey: {
      name: "categoryId",
      type: DataTypes.INTEGER,
    },
  };
  CategoryModel.hasMany(MovieModel, option1);
  MovieModel.belongsTo(CategoryModel, option1);

  // set association for MovieModel and ScheduleModel 1-many
  const option2 = {
    foreignKey: {
      name: "movieId",
      type: DataTypes.INTEGER,
    },
  };
  MovieModel.hasMany(ScheduleModel, option2);
  ScheduleModel.belongsTo(MovieModel, option2);

  // set association for RoleModel and UserModel 1-many
  const option3 = {
    foreignKey: {
      name: "roleId",
      type: DataTypes.INTEGER,
    },
  };
  RoleModel.hasMany(UserModel, option3);
  UserModel.belongsTo(RoleModel, option3);

  // set association for UserModel and BookingModel 1-many
  const option4 = {
    foreignKey: {
      name: "userId",
      type: DataTypes.STRING,
    },
  };
  UserModel.hasMany(BookingModel, option4);
  BookingModel.belongsTo(UserModel, option4);

  // set association for ScheduleModel and BookingModel 1-many
  const option5 = {
    foreignKey: {
      name: "scheduleId",
      type: DataTypes.INTEGER,
    },
  };
  ScheduleModel.hasMany(BookingModel, option5);
  BookingModel.belongsTo(ScheduleModel, option5);

  // set association for BookingModel and BookingSeatModel 1-many
  const option6 = {
    foreignKey: {
      name: "bookingId",
      type: DataTypes.STRING,
    },
  };
  BookingModel.hasMany(BookingSeatModel, option6);
  BookingSeatModel.belongsTo(BookingModel, option6);

  // set association for PaymentModel and OrderComboModel 1-many
  const option7 = {
    foreignKey: {
      name: "paymentId",
      type: DataTypes.STRING,
    },
  };
  PaymentModel.hasMany(OrderComboModel, option7);
  OrderComboModel.belongsTo(PaymentModel, option7);

  // set association for SeatTypeModel and SeatModel 1-many
  const option8 = {
    foreignKey: {
      name: "typeId",
      type: DataTypes.INTEGER,
    },
  };
  SeatTypeModel.hasMany(SeatModel, option8);
  SeatModel.belongsTo(SeatTypeModel, option8);

  // set association for ComboModel and OrderComboModel 1-many
  const option9 = {
    foreignKey: {
      name: "comboId",
      type: DataTypes.INTEGER,
    },
  };
  ComboModel.hasMany(OrderComboModel, option9);
  OrderComboModel.belongsTo(ComboModel, option9);

  // set association for MethodModel and PaymentModel 1-many
  const option10 = {
    foreignKey: {
      name: "methodId",
      type: DataTypes.INTEGER,
    },
  };
  MethodModel.hasMany(PaymentModel, option10);
  PaymentModel.belongsTo(MethodModel, option10);

  // set association for SeatModel and BookingSeatModel 1-1
  BookingSeatModel.hasOne(SeatModel, {
    foreignKey: "seatId",
  });
  SeatModel.belongsTo(BookingSeatModel, {
    foreignKey: "bookingId",
  });

  // set association for BookingModel and PaymentModel 1-1
  BookingModel.hasOne(PaymentModel, {
    foreignKey: "bookingId",
  });
  PaymentModel.belongsTo(BookingModel, {
    foreignKey: "bookingId",
  });

  // sync all models
  connection.sync();
};

module.exports = setAssociation;
