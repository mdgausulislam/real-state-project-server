const express = require("express");
const { signup, login, googleLogin, signOut } = require("../controllers/authControllers");

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/google", googleLogin);
router.get('/signout', signOut);

module.exports = router;
