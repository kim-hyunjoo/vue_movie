import axios from 'axios'
import type { VercelRequest, VercelResponse } from '@vercel/node'

const { APIKEY } = process.env
interface RequestBody {
  id: string
}

export default async function (req: VercelRequest, res: VercelResponse) {
  const { id }: Partial<RequestBody> = req.body
  const { data: responseValue } = await axios(
    `https://omdbapi.com/?apikey=${APIKEY}&i=${id}&plot=short`
  )
  res.status(200).json(responseValue)
}
