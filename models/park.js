const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const parkSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    street: {
      type: String,
      required: true,
    },
    city: {
      data: String,
      //   required: true,
    },
    washrooms: {
      type: String,
      enum: ["Yes", "No"],
      required: true,
    },
    amenities: {
      type: String,
    },
    reviews: [{ type: Schema.Types.ObjectId, ref: "Review" }],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Park", parkSchema);
