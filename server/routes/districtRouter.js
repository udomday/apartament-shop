const Router = require('express');
const router = new Router();
const DistrictController = require('../controllers/districtController');
const checkRole = require('../middleware/checkMiddleware')

router.post('/', checkRole(), DistrictController.create)
router.get('/', DistrictController.getAll)
router.get('/:id', DistrictController.getOne)

module.exports = router