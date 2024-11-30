export async function getServerSideProps({ params }) {
	const res = await fetch("http://localhost:3000/api/movie/"+params.id);
	const movie = await res.json();
	return { props: { movie } };
}

const MovieDetails = ({ movie }) => (
	<div className="font container mt-5">
		<div className="d-flex flex-column flex-md-row align-items-start">
			{/* Left Side: Movie Poster */}
			<div className="movie-poster me-md-4">
				<img
					src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
					alt={movie.title}
					className="img-fluid rounded"
				/>
			</div>

			{/* Right Side: Movie Details */}
			<div className="movie-details">
				<h1 className="text-center text-md-start">{movie.title}</h1>
				<p className="mt-4">{movie.overview}</p>
				<p>
					<strong>Release Date:</strong> {movie.release_date}
				</p>
				<p>
					<strong>Rating:</strong> {movie.vote_average}
				</p>
				<p>
					<strong>Genres:</strong>{" "}
					{movie.genres && movie.genres.map((genre) => genre).join(", ")}
				</p>
			</div>
		</div>
	</div>
);


export default MovieDetails;
