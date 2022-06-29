const mongoose = require("mongoose");

const RefSchema = new mongoose.Schema(
  {
    refName: {
      type: String,
      required: true,
    },
    refemail: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Ref = mongoose.model('Ref', RefSchema)

module.exports = Ref