const { Router } = require('express');
const spacesController = require('../controllers/spacesController')

const router = Router();

router.get('/spaces', spacesController.spaces_get);
router.post('/add-space', spacesController.spaces_post);


module.exports = router;