import Movie from '../../../models/Movie';
import Genre from '@/models/Genre';
import dbConnect from '../../../lib/dbConnect';
import { checkRole } from '@/lib/checkRole';

export default async function handler(req, res) {
    await dbConnect();

    const { id } = req.query;

    if (req.method === 'GET') {

        try {

            const movie = await Movie.findOne({ id });
            if (!movie) {
                return res.status(404).json({ error: 'Movie not found' });
            }

            const genres = await Genre.find({ id: { $in: movie.genre_ids } }).select('name -_id');

            const movieWithGenres = {
                ...movie.toObject(),
                genres: genres.map((genre) => genre.name),
            };

            res.status(200).json(movieWithGenres);
        } catch (error) {
            res.status(500).json({ error: 'Failed to fetch movie' });
        }
    } else if (req.method === 'PUT') {

      

        try {
            const updatedMovie = await Movie.findOneAndUpdate({ id }, req.body, {
                new: true,
            });
            if (!updatedMovie) {
                return res.status(404).json({ error: 'Movie not found' });
            }
            res.status(200).json(updatedMovie);
        } catch (error) {
            res.status(500).json({ error: 'Failed to update movie' });
        }
    } else if (req.method === 'DELETE') {


        try {
            const deletedMovie = await Movie.findOneAndDelete({ id: id });
            if (!deletedMovie) {
                return res.status(404).json({ error: 'Movie not found' });
            }
            res.status(200).json({ message: 'Movie deleted successfully' });
        } catch (error) {
            res.status(500).json({ error: 'Failed to delete movie' });
        }
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
}
