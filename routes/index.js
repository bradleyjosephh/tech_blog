const router = require('express').Router()

router.use('/api', require('./userRoutes.js'))
router.use('/api', require('./postRoutes.js'))
router.use('/api', require('./commentsRoutes.js'))
router.use(require('./homeRoutes.js'))

module.exports = router