const {Jobs} = require("../db/models/index")


const getAllJobs = (req, res) => {
    Jobs.findAll()
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
    const {title, area , seniority, description, country, state, typeOfEmployed, salary, modality} = req.body
    Jobs.create({
        title, area , seniority, description, country, state, typeOfEmployed, salary, modality
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

module.exports = {getAllJobs, getOneJob, createJob, deleteJob, updateJob, closeJob}