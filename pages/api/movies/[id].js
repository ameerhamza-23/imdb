import { TMDB_API_BASE_URL, TMDB_API_KEY } from "@/keys/tmdbKey";

export async function getServerSideProps({ params }) {
	const res = await fetch(
		`${TMDB_API_BASE_URL}/movie/${params.id}?api_key=${TMDB_API_KEY}`
	);
	const movieDetails = await res.json();
	return { props: { movieDetails } };
}
