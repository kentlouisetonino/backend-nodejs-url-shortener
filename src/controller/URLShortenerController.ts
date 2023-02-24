import { Request, Response } from 'express'
import mongoose, { Error } from 'mongoose'
import validUrl from 'valid-url'
import generateRandomNumber from '../libs/generate-random-number'
import removeTrailingSlash from '../libs/remove-trailing-slash'
import { URLInterface, URLSchema } from '../models/URLSchema'

export async function GetURL(req: Request, res: Response) {
  const URLModel = mongoose.model<URLInterface>('URL', URLSchema)
  const shortURL = req.params.short_url

  // * if short URL is valid
  if (Number(shortURL)) {
    URLModel.findOne(
      { shortURL: Number(shortURL) },
      (err: Error, data: URLInterface) => {
        if (err) {
          return res.json({
            error: 'invalid url',
          })
        }

        if (data) {
          return res.json({
            original_url: data.originalURL,
            short_url: data.shortURL,
          })
        }

        if (!data && !err) {
          return res.json({
            error: 'invalid url',
          })
        }
      }
    )
  }

  // * if short URL is invalid
  if (!Number(shortURL)) {
    return res.json({
      error: 'invalid url',
    })
  }
}

export async function CreateURL(req: Request, res: Response) {
  const URLModel = mongoose.model<URLInterface>('URL', URLSchema)
  const url = req.body.url
  const trimmedURL = removeTrailingSlash(url)
  const validatedUrl = validUrl.isWebUri(trimmedURL)
  const randomNumber = generateRandomNumber()

  // * if URL is invalid
  if (!validatedUrl) {
    return res.json({
      error: 'invalid url',
    })
  }

  URLModel.findOne(
    { originalURL: validatedUrl },
    (currentError: Error, currentData: URLInterface) => {
      // * if something wrong in finding the data
      if (currentError) {
        return res.json({
          error: 'invalid url',
        })
      }

      // * if url already exist
      if (currentData) {
        return res.json({
          original_url: currentData.originalURL,
          short_url: currentData.shortURL,
        })
      }

      // * default
      // * data to save
      const URLModelData = new URLModel({
        originalURL: validatedUrl,
        shortURL: randomNumber,
      })

      URLModelData.save((newError, newData) => {
        // * if something wrong in saving the data
        if (newError) {
          return res.json({
            error: 'invalid url',
          })
        }

        // return saved data
        return res.json({
          original_url: newData.originalURL,
          short_url: newData.shortURL,
        })
      })
    }
  )
}
