const res = require('express/lib/response')

const app = require('express').Router()

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/posts', (req, res) => {
    res.render('posts')
})

app.get('/profile', (req, res) => {
    res.render('profile')
})

module.exports = app