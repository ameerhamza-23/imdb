import { tmdb } from "../config/tmdb";

export default async function handler(req, res) {
	const { query, type } = req.query;

	if (!query) {
		return res.status(400).json({ error: "Search query is required" });
	}

	const endpoint = type === "tv" ? "/search/tv" : "/search/movie";

	try {
		const data = await tmdb(endpoint, `query=${encodeURIComponent(query)}`);
		res.status(200).json(data.results);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
}
