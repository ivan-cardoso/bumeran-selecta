const { Op } = require("sequelize");
const { Companies } = require("../db/models");

const companiesController = {
  async findAll(req, res, next) {
    try {
      const companies = await Companies.findAll();
      res.status(200).json(companies);
    } catch (err) {
      next(err);
    }
  },

  async findOrCreateCompanies(req, res, next) {
    try {
      const { name, address, email, img, bio } = req.body;

      const [companies, created] = await Companies.findOrCreate({
        where: { name, email },
        defaults: { address, img, bio },
      });
      if (created) res.status(201).json(companies);
      else res.sendStatus(500);
    } catch (err) {
      next(err);
    }
  },

  async updateByPk(req, res, next) {
    try {
      const { name, address, email, img, bio } = req.body;

      const [update, companies] = await Companies.update(
        { name, address, email, img, bio },
        { where: { id: req.params.id }, returning: true }
      );

      res.status(200).json(companies);
    } catch (err) {
      next(err);
    }
  },

  async destroyCompaniesByPk(req, res, next) {
    try {
      await Companies.destroy({ where: { id: req.params.id } });
      res.sendStatus(200);
    } catch (err) {
      next(err);
    }
  },

  async findAllBySearch(req, res, next) {
    try {
      const companies = await Companies.findAll({
        where: {
          [Op.or]: [
            {
              name: {
                [Op.iLike]: `%${req.params.search}%`,
              },
            },
          ],
        },
      });
      res.status(200).json(companies);
    } catch (err) {
      return next(err);
    }
  },
};

module.exports = companiesController;
