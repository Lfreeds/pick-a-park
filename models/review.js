const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  title: { type: String, required: true },
  park: { type: Schema.Types.ObjectId, ref: "Park" },
  rating: { type: Number, min: 1, max: 5, default: 5, required: true },
  shade: {
    type: String,
    enum: [
      "No Shade",
      "Minimal Shade",
      "Average Shade",
      "Moderate Shade",
      "Maximum Shade",
    ],
    default: "Average Shade",
    required: true,
  },
  ageRange: {
    type: String,
    enum: ["1 - 3 years", "3 - 6 years", "6 - 10 years", "11 years +"],
    required: true,
  },
  condition: {
    type: String,
    enum: ["Poor", "Fine", "Good", "Great"],
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Review", reviewSchema);
