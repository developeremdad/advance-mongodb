import config from '../../config'
import { TUser } from './user.interface'
import User from './user.model'

const createUserIntoDB = async (password: string, studentData: TUser) => {
  // create a user object
  const userData: Partial<TUser> = {}

  // If password is not given, use default password
  userData.password = password || config.default_password

  // Set user role
  userData.role = 'student';

  // Set manually generated id
  userData.id = "2023100001";

  // Create user
  const newUser = await User.create(userData);


  // Create a student after created user
  if (Object.keys(newUser).length) {
    // set id, _id as user
    studentData.id = newUser.id;
    studentData.user = newUser._id
  }

  const result = await User.create(payload)
  return result
}

const getAllUsersFromDB = async () => {
  const result = await User.find()
  return result
}

const getSingleUserFromDB = async (id: string) => {
  const result = await User.aggregate([{ $match: { id } }])
  return result
}

const deleteUserFromDB = async (id: string) => {
  const result = await User.updateOne({ id }, { isDeleted: true })
  return result
}

export const UserServices = {
  createUserIntoDB,
  getAllUsersFromDB,
  getSingleUserFromDB,
  deleteUserFromDB,
}
