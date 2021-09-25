const express = require('express');

const newtorkController = require('../controllers/network');

const router = express.Router();

router.get('/blockchain', newtorkController.getBlockchain);
router.get('/transaction', newtorkController.getTransaction);
router.get('/mine', newtorkController.getMine);
router.post('/register-abd-broadcast-node', newtorkController.postRegisterAndBroadcastNode);

module.exports = router;
