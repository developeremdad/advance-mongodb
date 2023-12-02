import { Request, Response } from 'express'
import { UserServices } from '../user/user.service'
import { userValidation } from '../user/user.validation'

const createUser = async (req: Request, res: Response) => {
  try {
    const {password, user: userData } = req.body

    // const zodParsedData = userValidation.userValidationSchema.parse(userData)

    const result = await UserServices.createUserIntoDB(password, userData)

    res.status(200).json({
      success: true,
      message: 'User is created successfully',
      data: result,
    })
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'something went wrong',
      error: err,
    })
  }
}

const getAllUsers = async (_req: Request, res: Response) => {
  try {
    const result = await UserServices.getAllUsersFromDB()

    res.status(200).json({
      success: true,
      message: 'Students are retrieved successfully',
      data: result,
    })
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'something went wrong',
      error: err,
    })
  }
}

const getSingleUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params

    const result = await UserServices.getSingleUserFromDB(userId)

    res.status(200).json({
      success: true,
      message: 'User is retrieved successfully',
      data: result,
    })
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'something went wrong',
      error: err,
    })
  }
}

const deleteUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params

    const result = await UserServices.deleteUserFromDB(userId)

    res.status(200).json({
      success: true,
      message: 'Student is deleted successfully',
      data: result,
    })
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'something went wrong',
      error: err,
    })
  }
}

export const StudentControllers = {
  createUser,
  getAllUsers,
  getSingleUser,
  deleteUser,
}
