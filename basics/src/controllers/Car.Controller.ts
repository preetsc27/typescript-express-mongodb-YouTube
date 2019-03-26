import { Router, Request, Response } from 'express'

const carRouter = Router()

carRouter.get("/", (req: Request, res: Response)=> {
    res.send("CAr route / GET")
})

carRouter.get("/getAll", (req: Request, res: Response)=> {
    res.send("CAr route /getAll GET")
})

export default carRouter