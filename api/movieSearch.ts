import axios from 'axios'
import type { VercelRequest, VercelResponse } from '@vercel/node'

const { APIKEY } = process.env

export default async function (req: VercelRequest, res: VercelResponse) {
  const { title } = req.query
  console.log(req.query)
  //data에 해당하는 구조분해 할당된 값을 responseValue라는 이름으로 사용하겠다.
  const { data: responseValue } = await axios(
    `https://omdbapi.com/?apikey=${APIKEY}&s=${title}`
  )
  res.status(200).json(responseValue)
}
