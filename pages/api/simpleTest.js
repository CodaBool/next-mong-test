export default async (req, res) => {
  try {
    console.log('NEXT_PUBLIC_STAGE =', process.env.NEXT_PUBLIC_STAGE)
    console.log('MONGODB_URI =', process.env.MONGODB_URI)
    let uri = process.env.MONGODB_URI || ''
    let stage = process.env.NEXT_PUBLIC_STAGE || ''
    res.status(200).json({stage, uri})
  } catch (err) {
    console.log(err)
    res.status(500).send(err)
  }
}