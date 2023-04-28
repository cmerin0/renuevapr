const express = require("express")
const usersRoutes = require("./users/users.routes")

const app = express()
const port = 3300
app.use(express.json())

app.use('/api/users', usersRoutes)

app.listen(port, () => {
    console.log("Server on port", port)
})