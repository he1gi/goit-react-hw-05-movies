import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Img } from './TradingMovies.styled';

export default function TrandingMovies({ movies }) {
  return movies.map(({ id, title, poster_path }) => {
    return (
      <li key={id}>
        <Link to={`/movies/${id}`}>
          <div>
            <Img
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt={title}
            />
          </div>
          <div>
            <h2>{title}</h2>
          </div>
        </Link>
      </li>
    );
  });
}

TrandingMovies.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      poster_path: PropTypes.string,
    })
  ),
};
