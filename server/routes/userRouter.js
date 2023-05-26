const Router = require('express');
const router = new Router();
const UserController = require('../controllers/userController')
const authMiddleware = require('../middleware/authMiddleware');
const userController = require('../controllers/userController');


router.post('/registration', UserController.registration)
router.post('/login', UserController.login)
router.get('/auth', authMiddleware, UserController.check)
router.put('/update', UserController.updateUserInfo)

router.post('/passport', UserController.createPassport)
router.get('/passport', UserController.getPassport)
router.put('/passport', UserController.updatePassport)

router.get('/favlist', userController.getFavList)
router.post('/favitem', UserController.createFavItem)
router.get('/favitem', UserController.getAllFavItem)
router.delete('/favitem,', UserController.deleteFavItem)

module.exports = router