const router = require('express').Router()
const { User, Post } = require('../models')
const passport = require('passport')
const jwt = require('jsonwebtoken')

router.post('/users/register', (req, res) => {
  console.log("request.body", req.body)
  User.register(new User({ username: req.body.username, email: req.body.email }), req.body.password, err => {
    if (err) { console.log(err) }
    res.sendStatus(200)
  })
})

router.post('/users/login', (req, res) => {
  console.log('request.username', req.body.username)
  User.authenticate()(req.body.username, req.body.password, (err, user) => {
    if (err) { console.log(err) }
console.log('user got' ,user)
    res.json(user ? {
      username: user.username,
      token: jwt.sign({ id: user.id }, process.env.SECRET)
    } : null)
  })
})


router.get('/users/profile', passport.authenticate('jwt'), (req, res) => res.json(req.user))

// GET one user
router.get('/users/:id', async function ({ params: { id } }, res) {
  const user = await User.findOne({ where: { id }, include: [Post] })
  res.json(user)
})


module.exports = router
