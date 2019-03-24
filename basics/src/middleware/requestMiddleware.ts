import { NextFunction, Request, Response } from 'express'

export const requestMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const startTime = new Date().getTime()
    res.on('finish', () => {
        const elapsedTimeMS = new Date().getTime() - startTime
        console.log(`${req.method} ${req.originalUrl} ${res.statusCode}: ${elapsedTimeMS}ms`)
    })
    next()
}