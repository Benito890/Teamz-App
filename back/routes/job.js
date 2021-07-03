const router = require('express').Router();
const jobControllers = require('../controllers/job');

router.get('/', jobControllers.handleGetAll);
router.post('/', jobControllers.handlePost);

module.exports = router;
