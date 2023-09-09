const router = require("express").Router();
const userController = require("../controllers/userController");
const {verifyAndAuthorization} = require("../middleware/verifyToken");

//? REGISTRATION 

router.put("/:id",verifyAndAuthorization, userController.updateUser);


module.exports = router