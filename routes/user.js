const express = require('express');

const userController = require('../controllers/user');

const expenseController = require('../controllers/expense');

const authenticatemiddleware = require('../middleware/auth');

const router = express.Router();

router.post('/signup', userController.signup);

router.post('/login', userController.login);

router.post('/addexpense', authenticatemiddleware.authenticate, expenseController.addexpense )

router.get('/getexpenses', authenticatemiddleware.authenticate, expenseController.getexpenses )

router.delete('/deleteexpense/:expenseid', authenticatemiddleware.authenticate, expenseController.deleteexpense)


module.exports = router;