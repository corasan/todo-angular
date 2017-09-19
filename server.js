const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000

const app = express()

app.use(express.static(__dirname + '/public'))
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({'extended':'true'}))
app.use(bodyParser.json())

app.get('*', (req, res) => {
  res.render('index.html')
})

app.listen(port, (err) => {
  if (err) {
    console.log(err)
  }
  console.log(`App listening to port ${port}`)
})
