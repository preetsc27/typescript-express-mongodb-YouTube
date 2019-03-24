import * as express from 'express'
import { Request, Response } from 'express';
import { requestMiddleware }  from './middleware/requestMiddleware'
import * as bodyParser from 'body-parser'

const PORT = 8080
const app = express()
app.use(requestMiddleware)
app.use(bodyParser.json())

app.get("/", (req: Request, res: Response) => {
    res.send("Hello YouTube")
})

app.post("/data", (req: Request, res: Response) => {
    console.log(req.body)
    const { name, age, cool } = req.body
    console.log(`Name: ${name}`)
    console.log(`Age: ${age}`)
    console.log(`Cool: ${cool}`)
    res.send("Hello DAta")
})

app.listen(PORT, () => {
    console.log("Server is running: http://localhost:8080")
})
