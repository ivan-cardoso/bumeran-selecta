const {
  Jobs,
  Areas,
  Seniority,
  Companies,
  Recruiters,
} = require("../db/models/index");

const recomendationAlgo = require("../../src/utils/AlgortimoRecomendacion/index");
const { Op } = require("sequelize");

const sequelize = require("sequelize");

const getAllJobs = (req, res) => {
  Jobs.findAll({ include: { all: true } })
    .then((data) => res.status(200).send(data))
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
};
const getOpenedJobs = (req, res) => {
  const arrOpenAssign = ["abierta", "asignada"];
  Jobs.findAll({
    where: {
      isOpen: {
        [Op.or]: arrOpenAssign,
      },
    },
    include: Recruiters,
  })
    .then((data) => res.status(200).send(data))
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
};

const getOneJob = (req, res) => {
  Jobs.findByPk(req.params.id)
    .then((data) => res.status(200).send(data))
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
};

const createJob = (req, res) => {
  const {
    title,
    areaId,
    seniorityId,
    description,
    country,
    stateId,
    typeemloyedId,
    salary,
    modalityId,
    companyId,
  } = req.body;
  Jobs.create({
    title,
    areaId,
    seniorityId,
    description,
    country,
    stateId,
    typeemloyedId,
    salary,
    modalityId,
    companyId,
  })
    .then((data) => {
      res.status(201).send(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
};

const deleteJob = (req, res) => {
  Jobs.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then(() => {
      res.status(200).send("Delete succefully");
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
};

const updateJob = (req, res) => {
  Jobs.update(req.body, {
    where: {
      id: req.params.id,
    },
    returning: true,
    plain: true,
  })
    .then(([, data]) => res.status(200).send(data))
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
};

// Jobs.update(
//   { isOpen: false },
//   {
//     where: {
//       id: req.params.id,
//     },
//     returning: true,
//     plain: true,
//   }
// )
// .then((jobUpdated)=>)
//   .then(([, data]) => res.status(200).send(data))
//   .catch((err) => {
//     console.log(err)
//     res.status(500).send(err)
//   })

const getTop3Companies = (req, res) => {
  Jobs.findAll({
    attributes: [
      "companyId",
      [sequelize.fn("COUNT", sequelize.col("companyId")), "CompanyCount"],
    ],
    include: [
      {
        model: Companies,
        attributes: ["name"],
      },
    ],
    group: ["companyId", "name"],
    raw: true,
    order: [["companyId", "ASC"]],
    limit: 3,
  })
    .then((data) => res.json(data))
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
};
const jobByArea = (req, res) => {
  Jobs.findAll({
    attributes: [
      "areaId",
      [sequelize.fn("COUNT", sequelize.col("areaId")), "value"],
    ],
    include: [
      {
        model: Areas,
        attributes: ["name"],
      },
    ],
    group: ["areaId", "name"],
    raw: true,
    order: [["areaId", "ASC"]],
  })
    .then((data) => res.json(data))
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
};
const jobBySeniority = (req, res) => {
  Jobs.findAll({
    attributes: [
      "seniorityId",
      [sequelize.fn("COUNT", sequelize.col("seniorityId")), "value"],
    ],
    include: [
      {
        model: Seniority,
        attributes: ["name"],
      },
    ],
    group: ["seniorityId", "name"],
    raw: true,
    order: [["seniorityId", "ASC"]],
  })
    .then((data) => res.json(data))
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
};
const historicChart = (req, res) => {
  Jobs.findAll({
    attributes: [
      "date",
      [sequelize.fn("COUNT", sequelize.col("date")), "total"],
    ],
    group: ["date"],
    raw: true,
    order: [["date", "ASC"]],
  })
    .then((data) => res.json(data))
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
};

const findAllBySearch = async (req, res, next) => {
  try {
    if (req.body.areaId) {
      const jobs = await Jobs.findAll({
        where: {
          areaId: req.body.areaId,
          [Op.or]: [
            {
              title: {
                [Op.iLike]: `%${req.body.search}%`,
              },
            },
          ],
        },
        include: { all: true },
        returning: true,
      });
      res.status(200).json(jobs);
    } else {
      const jobs = await Jobs.findAll({
        where: {
          [Op.or]: [
            {
              title: {
                [Op.iLike]: `%${req.body.search}%`,
              },
            },
          ],
        },
        include: { all: true },
        returning: true,
      });
      res.status(200).json(jobs);
    }
  } catch (err) {
    next(err);
  }
};
const assignRecruiter = async (req, res, next) => {
  try {
    const jobFounded = await Jobs.findByPk(req.body.jobId);
    const recruiterAdded = await jobFounded.addActiveRecruiter(
      req.body.recruiterId
    );
    jobFounded.isOpen = "asignada";
    await jobFounded.save();
    await recruiterAdded.addJob(jobFounded);

    res.status(200).json(recruiterAdded);
  } catch (err) {
    next(err);
  }
};
const findRecommendations = (req, res, next) => {
  Jobs.findByPk(req.body.id)
    .then((job) => recomendationAlgo(req.body.area, req.body.seniority))
    .then((recruiters) => res.status(200).json(recruiters))
    .catch((err) => next(err));
};

const deleteAssignRecruiter = async (req, res, next) => {
  try {
    const job = await Jobs.findByPk(req.body.jobId);
    job.removeSearchFromRecruiter(job.recruiterId);
    job.recruiterId = null;
    job.isOpen = "abierta";
    await job.save();
    res.status(200).json(job);
  } catch (err) {
    next(err);
  }
};

const ratingRecruiter = async (req, res, next) => {
  const { recruiterId, rating, candidates, jobId } = req.body;

  try {
    const job = await Jobs.findByPk(jobId);
    job.isOpen = "cerrada";
    job.candidates = candidates;
    job.ratingRecruiter = rating;
    if (job.recruiterId) {
      await job.removeSearchFromRecruiter(job.recruiterId);
    }
    await job.save();

    const jobsByRecruiter = await Jobs.findAll({
      where: { recruiterId },
      attributes: [
        "recruiterId",

        [sequelize.fn("SUM", sequelize.col("ratingRecruiter")), "total"],
        [sequelize.fn("COUNT", sequelize.col("id")), "cantidad"],
      ],
      group: "recruiterId",
      raw: true,
    });

    // {recruiterId:1, total:2, cantidad:4}

    const recruiter = await Recruiters.findByPk(recruiterId);
    console.log(jobsByRecruiter);
    recruiter.rating =
      jobsByRecruiter[0].total / parseInt(jobsByRecruiter[0].cantidad);
    console.log(recruiter.rating);
    await recruiter.save();
    res.status(200).json(job);
  } catch (err) {
    next(err);
  }
};
// const closeJob = (req, res) => {
//   Jobs.findByPk(req.params.id)
//     .then((job) => {
//       job.isOpen = "cerrada";
//       if (job.recruiterId) {
//         job.removeSearchFromRecruiter(job.recruiterId);
//       }
//       job.save();
//       return res.status(200).send(job);
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).send(err);
//     });

module.exports = {
  getAllJobs,
  getOneJob,
  createJob,
  deleteJob,
  updateJob,
  getTop3Companies,
  jobByArea,
  jobBySeniority,
  historicChart,
  getOpenedJobs,
  findAllBySearch,
  assignRecruiter,
  findRecommendations,
  deleteAssignRecruiter,
  ratingRecruiter,
};
