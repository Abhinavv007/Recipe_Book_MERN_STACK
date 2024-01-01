import express from "express"
import dbConnect from "./config/db.js"
import router from "./routes/recipe.js"
import cors from "cors"
const app = express()
app.use(cors())
dbConnect()

app.use(express.json())
app.use("/api",router)

app.listen(9000,()=>{
    console.log("Server started at port 9000")
})