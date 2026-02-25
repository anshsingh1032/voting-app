import express ,{json} from "express"
// import cors from "cors"
import cookieParser from "cookie-parser"
const app = express()

app.use(express.json({
    limit:"16kb"
}))
app.use(express.urlencoded({
    extended:true,limit:"16kb"
}))
app.use(express.static("public"))
app.use(cookieParser())


import userRouter from "./routes/user.routes.js"
import candidateRouter from "./routes/candidates.routes.js"
app.use("/user",userRouter)
app.use("/candidate",candidateRouter)

export{app}