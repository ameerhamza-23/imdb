import { TMDB_API_BASE_URL, TMDB_API_KEY } from "@/keys/tmdbKey";

export default async function handler(req, res) {
	try {
		const response = await fetch(
			`${TMDB_API_BASE_URL}/tv/popular?api_key=${TMDB_API_KEY}`
		);
		const data = await response.json();

		if (!response.ok) {
			throw new Error(
				data.status_message || "Failed to fetch popular TV shows"
			);
		}

		res.status(200).json(data.results);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
}
