import { Schema, model } from 'mongoose'
import { Guardian, LocalGuardian, Student, UserName } from './student.interface'

const nameSchema = new Schema<UserName>({
  firstName: {
    type: String,
    required: true,
  },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
    required: true,
  },
})

const guardianSchema = new Schema<Guardian>({
  fatherName: {
    type: String,
  },
  fatherOccupation: {
    type: String,
  },
  fatherContactNo: {
    type: String,
  },
  motherName: {
    type: String,
  },
  motherOccupation: {
    type: String,
  },
  motherContactNo: {
    type: String,
  },
})

const localGuardian = new Schema<LocalGuardian>({
  name: {
    type: String,
  },
  occupation: {
    type: String,
  },
  contact: {
    type: String,
  },
  address: {
    type: String,
  },
})

// Student schema
const studentSchema = new Schema<Student>({
  name: nameSchema,
  gender: ['male', 'female'],
  dateOfBirth: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  contactNo: {
    type: String,
    required: true,
  },
  bloodGroup: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  presentAddress: {
    type: String,
    required: true,
  },
  permanentAddress: {
    type: String,
    required: true,
  },
  guardian: guardianSchema,
  localGuardian: localGuardian,
  profileImg: {
    type: String,
    required: true,
  },
  isActive: ['active', 'block'],
})


export const StudentModel = model<Student>('student', studentSchema)
