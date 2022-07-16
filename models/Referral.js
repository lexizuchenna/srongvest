const mongoose = require("mongoose");

const RefSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
    },
    refName: {
      type: String,
      required: true,
    },
    refemail: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: 'pending'
    },
    amtReceived: {
      type: String,
      default: '0'
    }
  },
  {
    timestamps: true,
  }
);

const Ref = mongoose.model("Ref", RefSchema);

module.exports = Ref;
