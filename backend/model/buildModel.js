const mongoose = require("mongoose");

const buildSchema = mongoose.Schema(
  {
    ProjectName: {
      type: String,
      required: [true, "Project name is required"],
    },
    Build_Description: {
      type: String,
      required: [true, "Build Describtion is required"],
    },
    Build_Id: {
      type: String,
      required: [true, "Buid_Id is required"],
    },
    BuildData: {
      type: Object,
      required: [true, "Build Data is required"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Build", buildSchema);
