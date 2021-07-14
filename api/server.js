const express = require('express')
const app = express()
const port = 3001 //pasar a dotenv
// const sessions = require('express-session')
const cookieParser = require('cookie-parser')
//routers
const authRouter = require('./routes/auth')
//import models / db
const db = require('./db/db')
const Models = require('./db/models/index')

// app.use(
//   sessions({
//     secret: 'navent',
//     resave: true,
//     saveUninitialized: true,
//   })
// )

app.use(cookieParser())
app.use(express.json())

//Routers
app.use('/api/auth', authRouter)

db.sync({ force: true }).then(() => {
  app.listen(port, () => {
    console.log(`server running on port ${port}`)
  })
})
