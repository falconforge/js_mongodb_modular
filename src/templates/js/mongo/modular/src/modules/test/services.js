import TestModel from './models.js'

export const createTest = async (data) => {
  return await TestModel.create(data)
}

export const getTests = async () => {
  return await TestModel.find()
}