import TVShow from '../../../models/TVShow'
import dbConnect from '../../../lib/dbConnect'

export default async function handler(req, res) {
    await dbConnect();

    if (req.method === 'GET') {
      try {
        const shows = await TVShow.find();
        res.status(200).json(shows);
      } catch (error) {
        res.status(500).json({ error: 'Failed to fetch movies' });
      }
    } else if (req.method === 'POST') {
      try {
        const show = new TVShow(req.body); // Create a new movie
        await show.save();
        res.status(201).json(show);
      } catch (error) {
        res.status(500).json({ error: 'Failed to create movie' });
      }
    } else {
      res.status(405).json({ error: 'Method Not Allowed' }); // Handle unsupported methods
    }
  }