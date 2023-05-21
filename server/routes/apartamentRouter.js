const Router = require('express');
const router = new Router();
const apartamentController = require('../controllers/apartamentController');
const checkRole = require('../middleware/checkMiddleware')

router.post('/', checkRole("ADMIN"), apartamentController.create)
router.get('/', apartamentController.getAll)
router.get('/:id', apartamentController.getOne)

module.exports = router