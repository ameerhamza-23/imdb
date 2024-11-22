import { TMDB_API_BASE_URL, TMDB_API_KEY } from "@/keys/tmdbKey";

export async function getServerSideProps() {
	const res = await fetch(
		`${TMDB_API_BASE_URL}/trending/movie/week?api_key=${TMDB_API_KEY}`
	);
	const trendingMovies = await res.json();

	console.log(trendingMovies); // Log the response for debugging

	return { props: { trendingMovies: trendingMovies.results || [] } };
}
