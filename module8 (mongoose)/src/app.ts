import cors from 'cors'
import express, { Application, Request, Response } from 'express'
import { StudentRoutes } from './app/modules/student/student.route'

const app: Application = express()

//parsers
app.use(express.json())
app.use(cors())

// application routes
app.use('/api/v1/students', StudentRoutes)

const getAController = (_req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Congratulation api running successfully.",
    path: "/api/v1/health"
  })
}

app.get('/health', getAController)

export default app
