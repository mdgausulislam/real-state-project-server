const express = require('express');
const { test, updateUser, deleteUser, getUserListings, getUser } = require('../controllers/userController');

const verifyUser = require('../utils/verifyUser');
const router = express.Router();


router.get('/test', test);
router.post('/update/:id', verifyUser, updateUser);
router.delete('/delete/:id', verifyUser, deleteUser);
router.get('/listings/:id', verifyUser, getUserListings);
router.get('/:id', verifyUser, getUser);

module.exports = router;
