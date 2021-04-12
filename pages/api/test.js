import dbConnect from '../../util/db'
import { User } from '../../models'

export default async (req, res) => {
  try {
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