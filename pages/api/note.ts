import type { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase } from '../../lib/mongo/index'
import { INote, Note } from '../../lib/mongo/models'

connectToDatabase()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      const body: INote = req.body
      const newNote = new Note(body)
      await newNote.save()
      res.status(200).json({ success: true, msg: 'note added' })
    } catch (e) {
      res.status(500).send('error')
    }
  }

  if (req.method === 'GET') {
    const { id } = req.query
    const searchParams = { ...(id && { _id: id }) }
    try {
      const list = (await Note.find({ ...searchParams })).reverse()
      res.json({ list })
    } catch (e) {
      res.status(500).send('error')
    }
  }

  if (req.method === 'DELETE') {
    const { id } = JSON.parse(req.body)
    try {
      await Note.findByIdAndDelete(id)
      res.status(200).json({ success: true, msg: 'note deleted' })
    } catch (e) {
      res.status(500).send('error')
    }
  }

  if (req.method === 'PUT') {
    const { id } = req.body
    try {
      await Note.findByIdAndUpdate(id, req.body)
      res.status(200).json({ success: true, msg: 'note updated' })
    } catch (e) {
      res.status(500).send('error')
    }
  }
}
