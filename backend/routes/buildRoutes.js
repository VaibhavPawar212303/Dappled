const express = require("express");
const {
  getBuilds,
  setBuild,
  deleteBuild,
  getBuildById,
  uploadTest,
  getTestByBuildId,
} = require("../Controller/buildController");

const router = express.Router();
// const multerUpload = multer({ dest: "./videos" });

//api calls
router.route("/").get(getBuilds).post(setBuild);
router.route("/test/:Build_Id").get(getTestByBuildId);
router.route("/testupload").post(uploadTest);
//delete the build
router.route("/:id").delete(deleteBuild).get(getBuildById);

module.exports = router;
