const express = require('express');
const router = express.Router();
const port = 3000;
const usercontroller = require('../controllers/usercontroller');

router.get('/users', (req, res) => {
usercontroller.getAllUsers(req,res);
})
router.get('/users/:id', (req, res) => {
    usercontroller.getUser(req,res);
    })

module.exports = router ;