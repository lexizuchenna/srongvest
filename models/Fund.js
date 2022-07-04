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
    desc: {
      type: String,
      default: 'Funding Initiated'
    },
    amount: {
      type: String,
    }
  },
  {
    timestamps: true,
  }
);

const Users = mongoose.model('Users', UsersSchema)

module.exports = Users