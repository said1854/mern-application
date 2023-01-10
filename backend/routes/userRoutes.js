const express = require('express');
const router = express.Router();
const { registerUser,loginUser,getMe,getAllUsers } = require('../controllers/userController');

router.post('/', registerUser);
router.post('/login', loginUser);
router.get('/me/:id', getMe);
router.get('/', getAllUsers)
module.exports = router;
