import { Request, Response } from 'express'
import { studentServices } from './student.servise'

const createStudent = async (req: Request, res: Response) => {
  try {
    const student = req.body
    const result = await studentServices.createStudentService(student)

    res.status(200).json({
      success: true,
      message: 'Create student successfully',
      data: result,
    })
  } catch (error) {
    res.status(500).json({
      success: true,
      message: 'Have an internal error',
      error: error,
    })
  }
}

export const studentController = {
  createStudent,
}
