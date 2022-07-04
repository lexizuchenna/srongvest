const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User" || "Users",
    },
    email: {
        type: String,
        required: true
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    walletId: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    plan: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      default: 'Profile Updated'
    },
    amount: {
      type: String,
      default: '0.00'
    }
  },
  {
    timestamps: true,
  }
);

const Profile = mongoose.model("Profile", ProfileSchema);

module.exports = Profile;
