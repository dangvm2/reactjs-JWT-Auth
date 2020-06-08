const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser');
const userRouter = require('./routers/user')
const port = process.env.PORT
require('./db/mongoDB')

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: 'http://localhost:3000', //allow only this domain
    credentials: true
}))

app.use(userRouter)

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})