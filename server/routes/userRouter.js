const Router = require('express');
const router = new Router();
const UserController = require('../controllers/userController')
const authMiddleware = require('../middleware/authMiddleware')


router.post('/registration', UserController.registration)
router.post('/login', UserController.login)
router.get('/auth', authMiddleware, UserController.check)
router.put('/update', UserController.updateUserInfo)
router.post('/passport', UserController.createPassport)
router.get('/passport', UserController.getPassport)
router.put('/passport', UserController.updatePassport)

module.exports = router