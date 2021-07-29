const express = require('express')
const app = express()
const port = 3001 //pasar a dotenv
const cookieParser = require('cookie-parser')

const csrf = require('csurf')
const bodyParser = require('body-parser')
const admin = require('firebase-admin')

//import models / db
const db = require('./db/db')
const Models = require('./db/models/index')

const volleyball = require('volleyball')

//auth
app.use(cookieParser())
app.use(express.json())

//Routers

app.use(volleyball)
app.use('/api', require('./routes'))

db.sync({ force: false }).then(() => {
  app.listen(port, () => {
    console.log(`server running on port ${port}`)
  })
})
