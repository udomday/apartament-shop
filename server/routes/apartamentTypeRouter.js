const Router = require('express');
const router = new Router();
const apartamentTypeController= require('../controllers/apartamentTypeController');
const checkRole = require('../middleware/checkMiddleware')

router.post('/',  checkRole("ADMIN"), apartamentTypeController.create)
router.get('/', apartamentTypeController.getAll)
router.get('/type', checkRole("ADMIN"), apartamentTypeController.getOneType)

module.exports = router