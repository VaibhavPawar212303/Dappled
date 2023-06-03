const express = require("express");
const {
  getBuilds,
  setBuild,
  deleteBuild,
  getBuildById,
} = require("../Controller/buildController");
const router = express.Router();

//api calls
router.route("/").get(getBuilds).post(setBuild);
//delete the build
router.route("/:id").delete(deleteBuild).get(getBuildById);

module.exports = router;
