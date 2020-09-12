var express = require("express");
var router = express.Router();

const {
  test,
  postData,
  getAllData,
  getSingleData,
  deleteData,
  updateData,
} = require("../controllers/testController");

router.get("/test", test);
router.post("/post", postData);
router.get("/getalldata", getAllData);
router.get("/getsingledata/:_id", getSingleData);
router.put("/updatedata/:_id", updateData);
router.delete("/deletedata/:_id", deleteData);

module.exports = router;
