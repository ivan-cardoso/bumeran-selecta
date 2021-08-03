const User = require("../db/models/users");
const Roles = require("../db/models/roles");
const { firebase, admin } = require("../firebase");

const userController = {
  register(req, res) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(req.body.email, req.body.password)
      .then((userCredential) => {
        const user = userCredential.user;

        return Roles.findOne({ where: { name: req.body.role } }).then(
          (role) => {
            return User.create({
              ...user,
              name: req.body.name,
              surname: req.body.surname,
              img: req.body.img,
            }).then((user) => {
              role.addUser(user);
              res.json(user);
            });
          }
        );
      })
      .catch((err) => res.json(err.code));
  },

  deleteByUid(req, res) {
    admin
      .auth()
      .deleteUser(req.params.uid)
      .then((userRecord) => {
        User.destroy({ where: { uid: req.params.uid } }).then(() =>
          res.sendStatus(200)
        );
      })
      .catch((error) => {
        console.log("Error fetching user data:", error);
      });
  },

  getAll(req, res) {
    User.findAll({ include: Roles })
      .then((user) => res.json(user))
      .catch((err) => console.log(err));
  },

  getOneByUid(req, res) {
    User.findOne({ where: { uid: req.params.uid }, include: Roles })
      .then((user) => res.json(user))
      .catch((err) => console.log(err));
  },

  updateByUid(req, res, next) {
    const { uid, name, surname, img, roleId, email } = req.body;
    admin
      .auth()
      .updateUser(uid, {
        email: email,
      })
      .then(() => {
        User.update(
          { email, name, surname, img, roleId },
          { where: { uid: req.params.uid }, returning: true }
        )
          .then((user) => res.status(200).json(user[1]))
          .catch((err) => next(err));
      })
      .catch((error) => {
        console.log("Error updating user:", error);
      });
  },
};

module.exports = userController;
