const router = require('express').Router();
const candidateControllers = require('../controllers/candidate');

router.get('/', candidateControllers.handleGetAll);
router.get('/team/:id', candidateControllers.handleGetAllByTeamId);
router.get('/team/:job_id/:id', candidateControllers.handleGetAllByTeamAndJobId);
router.post('/:id', candidateControllers.handlePost);

module.exports = router;
