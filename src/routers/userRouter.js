const express = require('express');
const { getUser } = require('../controllers/userController');
const userRouter = express.Router();


userRouter.get('/user', getUser)
module.exports = userRouter;
