const express = require('express')
const router = express.Router()
const userController = require("../controllers/userController");

// Create a storage reference from our storage service

router.post("/register", userController.register);

router.delete("/delete/:uid", userController.deleteByUid);

router.get("/all", userController.getAll);

router.get("/:uid", userController.getOneByUid);

router.put("/update/:uid", userController.updateByUid);

module.exports = router
