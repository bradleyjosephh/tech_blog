const app = require('express').Router()

app.get('/', (req, res) => {
    res.render('/')
})

// app.get('/posts', )

module.exports = app