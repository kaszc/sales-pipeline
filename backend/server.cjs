const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config()

const app = express()
app.use(express.json())
app.use(cors())
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// ROUTES
const userRoutes = require("./routes/users.cjs")
app.use("/users", userRoutes)

// RUN BACKEND SERVER
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    app.listen(process.env.BACKEND_PORT, () => {
      console.log(`<Backend> Connected to MongoDB & listening on port ${process.env.BACKEND_PORT}.`)
    })
  })
  .catch((error) => console.log(error))