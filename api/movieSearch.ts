import axios from 'axios'
import type { VercelRequest, VercelResponse } from '@vercel/node'

const { APIKEY } = process.env

export default async function (req: VercelRequest, res: VercelResponse) {
  const { title, page } = req.query
  const { data: responseValue } = await axios(
    `https://omdbapi.com/?apikey=${APIKEY}&s=${title}&page=${page}`
  )
  res.status(200).json(responseValue)
}
