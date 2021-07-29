const { Recruiters, Areas, Seniority } = require('../db/models')
const { findOne } = require('../db/models/recruiters')
const { Op, where } = require('sequelize')

const recruitersController = {
  async findAll(req, res, next) {
    try {
      const recrutiers = await Recruiters.findAll({ include: { all: true } });
      res.status(200).json(recrutiers)
    } catch (err) {
      next(err)
    }
  },

  async findOrCreateRecruiter(req, res, next) {
    try {
      const {
        name,
        surname,
        email,
        country,
        stateId,
        bio,
        img,
        rating,
        favoriteArea1,
        favoriteArea2,
        favoriteArea3,
        seniority1,
        seniority2,
        seniority3,
      } = req.body;

      const [recrutier, created] = await Recruiters.findOrCreate({
        where: { email },
        defaults: {
          name,
          surname,
          country,
          stateId,
          bio,
          img,
          rating,
          favoriteArea1,
          favoriteArea2,
          favoriteArea3,
          seniority1,
          seniority2,
          seniority3,
        },
      });

      if (created) res.status(201).json(recrutier);
      else res.sendStatus(500);
    } catch (err) {
      next(err);
    }
  },

  async updateByPk(req, res, next) {
    try {
      const {
        name,
        surname,
        email,
        country,
        stateId,
        bio,
        img,
        rating,
        favoriteArea1,
        favoriteArea2,
        favoriteArea3,
        seniority1,
        seniority2,
        seniority3,
      } = req.body;

      const [update, recrutier] = await Recruiters.update(
        {
          name,
          surname,
          email,
          country,
          stateId,
          bio,
          img,
          rating,
          favoriteArea1,
          favoriteArea2,
          favoriteArea3,
          seniority1,
          seniority2,
          seniority3,
        },
        { where: { id: req.params.id }, returning: true }
      );

      res.status(200).json(recrutier)
    } catch (err) {
      next(err)
    }
  },

  async destroyRecrutierByPk(req, res, next) {
    try {
      const destroyedUser = await Recruiters.findByPk(req.params.id)
      await Recruiters.destroy({ where: { id: req.params.id } })
      res.status(200).send(destroyedUser)
    } catch (err) {
      next(err)
    }
  },
  async SearchByName(req, res, next) {
    try {
      const recruiters = await Recruiters.findAll({
        where: {
          [Op.or]: [
            {
              name: {
                [Op.iLike]: `%${req.params.name}%`,
              },
            },
            {
              surname: {
                [Op.iLike]: `%${req.params.name}%`,
              },
            },
            {
              email: {
                [Op.iLike]: `%${req.params.name}%`,
              },
            },
          ],
        },
      })
      res.status(200).json(recruiters)
    } catch (err) {
      return next(err)
    }
  },
  getTopThreeRecruiters(req, res) {
    Recruiters.findAll({ order: [['rating', 'DESC']], limit: 3 })
      .then((recruiters) => res.status(200).send(recruiters))
      .catch((err) => {
        console.log(err)
        res.status(500).send(err)
      })
  },

  findAllBySearch(req, res, next){
    Recruiters.findAll({
      where: {
        [Op.and]: [
          {
            name: {
              [Op.iLike]: `%${req.body.search}%`,
            },
          },
          {
            favoriteArea1: {
              [Op.iLike]: `${req.body.area1}%`,
            },
          },
          {
            seniority1: {
              [Op.iLike]: `${req.body.seniority1}%`,
            },
          },
        ],
      },
      include: { all: true },
    })
      .then((data) => res.status(200).json(data))
      .catch((err) => next(err));
  }
}

module.exports = recruitersController
