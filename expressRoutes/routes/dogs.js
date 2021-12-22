const express = require('express')
const router = express.Router();


router.get('/', (req, res) => {
    res.send('ALL DOGS')
})
router.get('/buy', (req, res) => {
    res.send('YOU ARE BUYING A DOG')
})
router.get('/buy/amt', (req, res) => {
    res.send('HOW MANY DOGS DO YOU WANT TO BUY')
})
router.get('/buy/amt/payment', (req, res) => {
    res.send('CONFIRM PAYMENT PLAN HERE')
})

module.exports = router;