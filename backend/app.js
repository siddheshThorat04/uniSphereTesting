const express = require("express")
const cookieParser=require('cookie-parser')
const { createServer } = require("http")
const socketSetup = require("./socket"); // Import the socket setup
require("dotenv").config()


const connectDb=require("./db/connectDb.js")
const authRoutes=require("./routes/authRoutes")
const adminRoutes=require("./routes/adminRoutes");
const userRoutes=require("./routes/userRoutes");
const path = require("path");
const app = express()

const port = "https://unispheretesting-5.onrender.com"
const server = createServer(app)


app.use(cookieParser())
app.use(express.json())


app.use("/api/auth",authRoutes)
app.use("/api/admin",adminRoutes)
app.use("/api/user",userRoutes)

server.listen(port, () => {
    connectDb()
    console.log(`Server run on port http://localhost:${port}`)
})

socketSetup(server)