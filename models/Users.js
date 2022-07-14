const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      default: "Account Created",
    },
    amount: {
      type: String,
      default: "0.00",
    },
    revenue: {
      type: String,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Users = mongoose.model("Users", UsersSchema);

module.exports = Users;
