const express = require('express')
require('./db/mongoose')
const userRouter = require('../src/routers/users')
const taskRouter = require('../src/routers/tasks')


const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})
