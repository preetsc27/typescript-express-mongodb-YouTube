import * as express from 'express'
import { Request, Response } from 'express';
import { requestMiddleware }  from './middleware/requestMiddleware'
const PORT = 8080
const app = express()
app.use(requestMiddleware)

app.get("/", (req: Request, res: Response) => {
    res.send("Hello YouTube")
})

app.listen(PORT, () => {
    console.log("Server is running: http://localhost:8080")
})
