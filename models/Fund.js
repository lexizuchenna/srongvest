const mongoose = require("mongoose");

const FundSchema = new mongoose.Schema(
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
    plan: {
      type: String,
      
    },
    desc: {
      type: String,
      default: "Funding Initiated",
    },
    amount: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Fund = mongoose.model("Fund", FundSchema);

module.exports = Fund;
