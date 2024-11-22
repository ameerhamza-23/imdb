import { TMDB_API_BASE_URL, TMDB_API_KEY } from "@/keys/tmdbKey";

export async function getServerSideProps() {
	const res = await fetch(
		`${TMDB_API_BASE_URL}/movie/popular?api_key=${TMDB_API_KEY}`
	);
	const popularMovies = await res.json();
	return { props: { popularMovies: popularMovies.results } };
}
