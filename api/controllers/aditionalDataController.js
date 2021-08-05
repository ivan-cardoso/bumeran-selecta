const {
  Areas,
  States,
  Seniority,
  TypeEmployed,
  Modality,
  Roles,
} = require('../db/models/index')

const aditionalDataController = {
  async getAreas(req, res, next) {
    try {
      const areas = await Areas.findAll()
      res.status(200).json(areas)
    } catch (err) {
      next(err)
    }
  },

  async getStates(req, res, next) {
    try {
      const states = await States.findAll()
      res.status(200).json(states)
    } catch (err) {
      next(err)
    }
  },

  async getSeniorities(req, res, next) {
    try {
      const seniority = await Seniority.findAll()
      res.status(200).json(seniority)
    } catch (err) {
      next(err)
    }
  },

  async getTypeEmployed(req, res, next) {
    try {
      const typeOfEmployed = await TypeEmployed.findAll()
      res.status(200).json(typeOfEmployed)
    } catch (err) {
      next(err)
    }
  },

  async getModalities(req, res, next) {
    try {
      const modalities = await Modality.findAll()
      res.status(200).json(modalities)
    } catch (err) {
      next(err)
    }
  },
  async getRoles(req, res, next) {
    try {
      const roles = await Roles.findAll()
      res.status(200).json(roles)
    } catch (err) {
      next(err)
    }
  },
}

module.exports = aditionalDataController
