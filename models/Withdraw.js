const mongoose = require("mongoose");

const WithdrawSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
    },
    firstName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    paymentId: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      default: "Withdrawal Initiated",
    },
    amount: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Withdraw = mongoose.model("Withdraw", WithdrawSchema);

module.exports = Withdraw;
