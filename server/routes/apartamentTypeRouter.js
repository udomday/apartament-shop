const Router = require('express');
const router = new Router();
const apartamentTypeController= require('../controllers/apartamentTypeController');
const checkRole = require('../middleware/checkMiddleware')

router.post('/', apartamentTypeController.create)
router.get('/', apartamentTypeController.getAll)

module.exports = router