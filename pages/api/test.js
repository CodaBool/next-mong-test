import dbConnect from '../../util/db'
import { User } from '../../models'

export default async (req, res) => {
  try {
    console.log('TEST_ENV =', process.env.TEST_ENV)
    console.log('ENV =', process.env.MONGODB_URI)
    await dbConnect()
    let resp = []
    await User.find({})
      .then(response => resp = response)
      .catch(err => console.log(err))
    console.log(resp)
    res.status(200).send(resp)
  } catch (err) {
    console.log(err)
    res.status(500).send(err)
  }
}