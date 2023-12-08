const express = require("express");
const { signup, login, googleLogin } = require("../controllers/authControllers");

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/google", googleLogin);

module.exports = router;
