const express =require("express")

//const usersRoutes = require("./service/users")
const userRoute = require("./service/users")


const server = express()


server.use(express.json())
server.use("/users", userRoute)
//server.use("/users", usersRoutes)
server.listen(3000, ()=>{
    console.log("server is running on port 3000")
})