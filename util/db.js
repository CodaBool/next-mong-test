import mongoose from 'mongoose'

export default async () => {
  console.log('TEST_ENV =', process.env.MONGODB_URI)
  console.log('MONGODB_URI =', process.env.MONGODB_URI)
  if (mongoose.connection.readyState >= 1) return
  return mongoose.connect(
    process.env.MONGODB_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    },
    () => console.log('connected!')
  )
}
