const express = require('express')
const router = express.Router()
const {
  getAllJobs,
  getOneJob,
  getOpenedJobs,
  createJob,
  deleteJob,
  updateJob,
  closeJob,
  getTop3Companies,
  jobByArea,
  jobBySeniority,
  historicChart,
  findAllBySearch,
  assignRecruiter,
  findRecommendations,
} = require('../controllers/jobsController')

router.get('/opened', getOpenedJobs)
router.get('/historic', historicChart)
router.get('/jobbyarea', jobByArea)
router.get('/jobbyseniority', jobBySeniority)
router.get('/top3', getTop3Companies)
router.post('/findrecomendation', findRecommendations)
router.get('/', getAllJobs)
//router.get('/:id', getOneJob)
router.post("/filter", findAllBySearch);
router.post('/create', createJob)
router.post('/assignrecruiter', assignRecruiter)
router.delete('/delete/:id', deleteJob)
router.put('/update/:id', updateJob)
router.put("/closejob/:id", closeJob);

module.exports = router
