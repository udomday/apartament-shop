const Router = require('express');
const router = new Router();
const UserController = require('../controllers/userController')
const authMiddleware = require('../middleware/authMiddleware');
const userController = require('../controllers/userController');
const checkRole = require('../middleware/checkMiddleware')

router.post('/registration', UserController.registration)
router.post('/login', UserController.login)
router.get('/auth', authMiddleware, UserController.check)
router.put('/update', UserController.updateUserInfo)

router.post('/passport', UserController.createPassport)
router.get('/passport', UserController.getPassport)
router.put('/passport', UserController.updatePassport)

router.get('/favlist', userController.getFavList)
router.post('/favitem', UserController.createFavItem)
router.get('/favitems', UserController.getAllFavItem)
router.get('/favitem', UserController.getOneFavItem)
router.delete('/favitem', UserController.deleteFavItem)

router.post('/purchaseorder', UserController.createPurchaseOrder)
router.get('/purchaseorders', UserController.getAllPurchaseOrder)
router.get('/adminpurchaseorder', checkRole("ADMIN"),  UserController.getAdminAllPurchaseOrder)
router.put('/updatepurchaseorder', checkRole("ADMIN"), UserController.updatePurchaseOrder)
router.get('/purchaseorder', UserController.getOnePurchaseOrder)
router.delete('/purchaseorder', UserController.deletePurchaseOrder)

module.exports = router