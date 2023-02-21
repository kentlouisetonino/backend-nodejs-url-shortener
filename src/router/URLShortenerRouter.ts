import express from 'express'
import { CreateURL, GetURL } from '../controller/URLShortenerController'

const router = express.Router()

router.get('/shorturl/:short_url?', GetURL)
router.post('/shorturl', CreateURL)

export default router
