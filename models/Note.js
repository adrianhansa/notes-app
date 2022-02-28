const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please add a title"],
      trim: true,
      unique: true,
      maxlength: [40, "The title cannot have more than 40 characters"],
    },
    description: {
      type: String,
      required: [true, "Please add a description"],
      trim: true,
      unique: true,
      maxlength: [200, "The description cannot have more than 40 characters"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model.Note || mongoose.model("notes", noteSchema);
