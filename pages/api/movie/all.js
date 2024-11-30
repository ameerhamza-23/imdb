import Movie from '../../../models/Movie'
import dbConnect from '../../../lib/dbConnect'

export default async function handler(req, res) {
    await dbConnect();

    if (req.method === 'GET') {
      try {
        const movies = await Movie.find();
        res.status(200).json(movies);
      } catch (error) {
        res.status(500).json({ error: 'Failed to fetch movies' });
      }
    } else if (req.method === 'POST') {
      try {
        const movie = new Movie(req.body); 
        await movie.save();
        res.status(201).json(movie);
      } catch (error) {
        res.status(500).json({ error: 'Failed to create movie' });
      }
    } else {
      res.status(405).json({ error: 'Method Not Allowed' }); 
    }
  }