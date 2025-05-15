require("dotenv").config();
const express = require("express")
const cors = require("cors")
const userRoutes = require("./routes/userRoutes")

const app = express()
app.use(express.json());


// Configure CORS to allow all origins
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}))

const authMiddleWare = require("./middleware/AuthMiddleware")
PORT = 5500
const dbcon = require("./db/dbConfig")
//login route

// app.use(express.json())

app.get("/", (req, res) => {
  res.send("done!")
})

// Mount routes
app.use("/api/users", userRoutes)

async function start() {
  try {
    console.log("start database connection")
    const result = await dbcon.execute("select 'test'")
    console.log(result)
  } catch (error) {
    console.log(error.message)
  }
}

start()

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).json({ message: "Something went wrong!" })
})

app.listen(PORT, '0.0.0.0', (err) => {
  if (err) {
    console.log(err.message)
  } else {
    console.log(`Server is running on http://0.0.0.0:${PORT}`)
  }
})



