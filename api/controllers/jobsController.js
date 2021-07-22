const {
  Jobs,
  Areas,
  States,
  Seniority,
  TypeEmployed,
  Modality,
  Companies,
  Recruiters,
} = require('../db/models/index')
const { Op } = require("sequelize");


const sequelize = require('sequelize')

const getAllJobs = (req, res) => {
  Jobs.findAll({ include: { all: true } })
    .then((data) => res.status(200).send(data))
    .catch((err) => {
      console.log(err)
      res.status(500).send(err)
    })
}
const getOpenedJobs = (req, res) => {
  Jobs.findAll({ where: { isOpen: true }, include: Recruiters })
    .then((data) => res.status(200).send(data))
    .catch((err) => {
      console.log(err)
      res.status(500).send(err)
    })
}

const getOneJob = (req, res) => {
  Jobs.findByPk(req.params.id)
    .then((data) => res.status(200).send(data))
    .catch((err) => {
      console.log(err)
      res.status(500).send(err)
    })
}

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
  } = req.body
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
      res.status(201).send(data)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).send(err)
    })
}

const deleteJob = (req, res) => {
  Jobs.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then(() => {
      res.status(200).send('Delete succefully')
    })
    .catch((err) => {
      console.log(err)
      res.status(500).send(err)
    })
}

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
      console.log(err)
      res.status(500).send(err)
    })
}

const closeJob = (req, res) => {
  Jobs.update(
    { isOpen: false },
    {
      where: {
        id: req.params.id,
      },
      returning: true,
      plain: true,
    }
  )
    .then(([, data]) => res.status(200).send(data))
    .catch((err) => {
      console.log(err)
      res.status(500).send(err)
    })
}
const getTop3Companies = (req, res) => {
  Jobs.findAll({
    attributes: [
      'companyId',
      [sequelize.fn('COUNT', sequelize.col('companyId')), 'CompanyCount'],
    ],
    include: [
      {
        model: Companies,
        attributes: ['name'],
      },
    ],
    group: ['companyId', 'name'],
    raw: true,
    order: [['companyId', 'ASC']],
    limit: 3,
  })
    .then((data) => res.json(data))
    .catch((err) => {
      console.log(err)
      res.status(500).send(err)
    })
}
const jobByArea = (req, res) => {
  Jobs.findAll({
    attributes: [
      'areaId',
      [sequelize.fn('COUNT', sequelize.col('areaId')), 'value'],
    ],
    include: [
      {
        model: Areas,
        attributes: ['name'],
      },
    ],
    group: ['areaId', 'name'],
    raw: true,
    order: [['areaId', 'ASC']],
  })
    .then((data) => res.json(data))
    .catch((err) => {
      console.log(err)
      res.status(500).send(err)
    })
}
const jobBySeniority = (req, res) => {
  Jobs.findAll({
    attributes: [
      'seniorityId',
      [sequelize.fn('COUNT', sequelize.col('seniorityId')), 'value'],
    ],
    include: [
      {
        model: Seniority,
        attributes: ['name'],
      },
    ],
    group: ['seniorityId', 'name'],
    raw: true,
    order: [['seniorityId', 'ASC']],
  })
    .then((data) => res.json(data))
    .catch((err) => {
      console.log(err)
      res.status(500).send(err)
    })
}
const historicChart = (req, res) => {
  Jobs.findAll({
    attributes: [
      'date',
      [sequelize.fn('COUNT', sequelize.col('date')), 'total'],
    ],
    group: ['date'],
    raw: true,
    order: [['date', 'ASC']],
  })
    .then((data) => res.json(data))
    .catch((err) => {
      console.log(err)
      res.status(500).send(err)
    })
}
const findAllBySearch = async (req, res, next) => {
  try {
    const jobs = await Jobs.findAll({
      where: {
        [Op.or]: [
          {
            title: {
              [Op.iLike]: `%${req.params.search}%`,
            },
          },
        ],
      },
      include: { all: true },
    });
    res.status(200).json(jobs);
  } catch (err) {
    next(err);
  }
};

module.exports = {

  getAllJobs,
  getOneJob,
  createJob,
  deleteJob,
  updateJob,
  closeJob,
  getTop3Companies,
  jobByArea,
  jobBySeniority,
  historicChart,
  getOpenedJobs,
  findAllBySearch,
};
