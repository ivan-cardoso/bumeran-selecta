const express = require("express")
const router = express.Router()
const {getAllJobs,getOneJob, createJob, deleteJob, updateJob, closeJob} = require("../controllers/jobsController")

router.get("/", getAllJobs)
router.get("/:id", getOneJob)
router.post("/create", createJob)
router.delete("/delete/:id", deleteJob)
router.put("/update/:id", updateJob)
router.put("/closeJob/:id", closeJob)

module.exports = router