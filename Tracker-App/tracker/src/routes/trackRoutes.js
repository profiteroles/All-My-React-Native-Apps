const express = require('express');
const mongoose = require('mongoose');
const requireAuth = require('../middlewares/requireAuth');
const requreAuth = require('../middlewares/requireAuth');

const Track = mongoose.model('Track');


const router = express.Router();

router.use(requireAuth);

router.get('/tracks', async (req, res) => {
});

router.post('/tracks', async (req, res) => {

    }
try{
});

module.exports = router;