import { PropTypes } from "prop-types";

function Movie({key, coverImage, title, genres, summary}) {
    return <div key={key}>
    <h2>{title}</h2>
    <img src={coverImage}></img>
    <ul>
      {genres.map((g) => <li>{g}</li>)}
    </ul>
    <p>{summary}</p>
    </div>

}

Movie.propTypes = {
    coverImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;