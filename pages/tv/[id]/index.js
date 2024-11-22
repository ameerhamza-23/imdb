import { TMDB_API_BASE_URL, TMDB_API_KEY } from "@/keys/tmdbKey";

export async function getServerSideProps({ params }) {
	const res = await fetch(
		`${TMDB_API_BASE_URL}/tv/${params.id}?api_key=${TMDB_API_KEY}`
	);
	const show = await res.json();

	return { props: { show } };
}

const TVShowDetails = ({ show }) => (
	<div className="font container mt-5">
		<div className="row">
			<div className="col-md-4">
				<img
					src={
						show.poster_path
							? `https://image.tmdb.org/t/p/w500${show.poster_path}`
							: "https://via.placeholder.com/500x750?text=No+Image"
					}
					className="img-fluid rounded"
					alt={show.name}
				/>
			</div>
			<div className="col-md-8">
				<h1>{show.name}</h1>
				<p>
					<strong>Overview:</strong>{" "}
					{show.overview || "No description available."}
				</p>
				<p>
					<strong>First Air Date:</strong> {show.first_air_date || "N/A"}
				</p>
				<p>
					<strong>Rating:</strong> {show.vote_average || "N/A"}
				</p>
				<p>
					<strong>Genres:</strong>{" "}
					{show.genres
						? show.genres.map((genre) => genre.name).join(", ")
						: "N/A"}
				</p>
			</div>
		</div>
	</div>
);

export default TVShowDetails;
