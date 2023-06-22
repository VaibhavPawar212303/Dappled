const mongoose = require("mongoose");

const testSchema = mongoose.Schema(
  {
    Build_Id: {
      type: String,
      required: [true, "Buid_Id is required"],
    },
    testId: {
      type: String,
      required: [true, "testId is required"],
    },
    stats: {
      type: Object,
    },
    reporterStats: {
      type: Object,
    },
    tests: {
      type: Array,
    },
    video: {
      data: Buffer,
      contentType: String,
    },
    spec: {
      type: Object,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Test", testSchema);
