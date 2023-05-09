const Router = require('express');
const router = new Router();
const apartamentRouter = require('./apartamentRouter');
const apartamentTypeRouter = require('./apartamentTypeRouter')
const districtRouter = require('./districtRouter');
const userRouter = require('./userRouter');

router.use('/user', userRouter)
router.use('/apartament', apartamentRouter)
router.use('/apartype', apartamentTypeRouter)
router.use('/district', districtRouter)



module.exports = router