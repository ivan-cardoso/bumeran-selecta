const express = require("express")
const router = express.Router()
const {
  getAllJobs,
  getOneJob,
  createJob,
  deleteJob,
  updateJob,
  closeJob,
  findAllBySearch,
} = require("../controllers/jobsController");

router.get("/", getAllJobs)
//router.get("/:id", getOneJob)
router.get("/:search", findAllBySearch);
router.post("/create", createJob)
router.delete("/delete/:id", deleteJob)
router.put("/update/:id", updateJob)
router.put("/closeJob/:id", closeJob)

module.exports = router