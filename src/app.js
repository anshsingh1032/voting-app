import express ,{json} from "express"
// import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.listen(process.env.PORT || 8000 , ()=>{
    console.log("app is listening");
})

export{app}