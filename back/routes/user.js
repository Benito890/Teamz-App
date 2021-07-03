const router = require('express').Router();
const userControllers = require('../controllers/user');

router.get('/', userControllers.handleGetAll);
router.post('/', userControllers.handlePost);

module.exports = router;
