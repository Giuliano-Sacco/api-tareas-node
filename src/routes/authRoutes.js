const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');

// Ruta de registro
router.post('/register', register);
router.post('/login', login);

module.exports = router;




const authController = require('../controllers/authController');

// Registro
router.post('/register', authController.register);

// Login
router.post('/login', authController.login);

module.exports = router;

