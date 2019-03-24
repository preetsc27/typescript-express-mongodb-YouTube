import * as express from 'express'
import { Request, Response } from 'express';
const PORT = 8080
const app = express()

app.get("/", (req: Request, res: Response) => {
    res.send("Hello YouTube")
})

app.listen(PORT, () => {
    console.log("Server is running: http://localhost:8080")
})