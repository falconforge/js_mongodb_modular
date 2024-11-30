import mongoose from 'mongoose'

export const healthCheck = (req, res) => {
  const dbStatus = mongoose.connection.readyState === 1 ? 'connected' : 'disconnected'
  res.status(200).json({
    status: 'OK',
    database: dbStatus
  })
}