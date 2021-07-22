const {Jobs, Areas, States, Seniority, TypeEmployed, Modality } = require("../db/models/index")
const { Op } = require("sequelize");


const getAllJobs = (req, res) => {
    Jobs.findAll({ include: { all: true}})
    .then((data) => res.status(200).send(data))
    .catch((err)=> {
        console.log(err)
        res.status(500).send(err)
    })
}

const getOneJob = (req, res) => {
    Jobs.findByPk(req.params.id)
    .then((data) => res.status(200).send(data))
    .catch((err)=> {
        console.log(err)
        res.status(500).send(err)
    })
}

const createJob = (req, res) => {
    const {title, areaId , seniorityId, description, country, stateId, typeemloyedId, salary, modalityId , companyId} = req.body
    Jobs.create({
        title, areaId , seniorityId, description, country, stateId, typeemloyedId, salary, modalityId , companyId
    })
    .then((data)=>{
        res.status(201).send(data)
    })
    .catch((err)=> {
        console.log(err)
        res.status(500).send(err)
    })
}

const deleteJob = (req, res) => {
    Jobs.destroy({
        where : {
            id : req.params.id
        }
    })
    .then(()=>{
        res.status(200).send("Delete succefully")
    })
    .catch((err)=> {
        console.log(err)
        res.status(500).send(err)
    })
}

const updateJob = (req, res) => {
    Jobs.update(req.body, {
        where : {
            id : req.params.id
        },
        returning : true,
        plain : true 
    })
    .then(([,data]) => res.status(200).send(data))
    .catch((err)=> {
        console.log(err)
        res.status(500).send(err)
    })
}

const closeJob = (req, res) => {
    Jobs.update({isOpen : false}, {
        where : {
            id : req.params.id
        },
        returning : true,
        plain : true
    })
    .then(([,data]) => res.status(200).send(data))
    .catch((err)=> {
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
  findAllBySearch,
};