const router = require('express').Router();
const teamControllers = require('../controllers/team');

router.get('/', teamControllers.handleGetAll);
router.get('/:id', teamControllers.handleGetOneById);
router.get('/team/:id', teamControllers.handleGetAllByTeamId);
router.get('/user/:id', teamControllers.handleGetAllByUserId);
router.post('/:id', teamControllers.handlePost);

module.exports = router;
