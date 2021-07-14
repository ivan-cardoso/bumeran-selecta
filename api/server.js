const express = require('express')
const app = express()
const port = 3001 //pasar a dotenv
// const sessions = require('express-session')
const cookieParser = require('cookie-parser')
//routers
const authRouter = require('./routes/auth')

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

app.listen(port, () => {
  console.log(`server running on port ${port}`)
})
