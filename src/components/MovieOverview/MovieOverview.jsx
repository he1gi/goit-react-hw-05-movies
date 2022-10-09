import PropTypes from 'prop-types';

import {
  Wrapper,
  TextWrapper,
  ImgWrapper,
  StyledLink,
} from './MovieOverview.styled';

export default function MovieOverview({ details }) {
  const { poster_path, title, overview, genres, vote_average } = details;
  const fixedVote =
    vote_average !== 0 ? `${(vote_average * 10).toFixed(1)} %` : null;

  return (
    <>
      <Wrapper>
        <div>
          <ImgWrapper
            src={`https://image.tmdb.org/t/p/original${poster_path}`}
            alt={title}
          />
        </div>
        <TextWrapper>
          {/* <StyledLink to="/">Go back</StyledLink> */}
          <StyledLink to="/movies">Go back</StyledLink>
          <StyledLink to="cast">Cast</StyledLink>
          <StyledLink to="reviews">Reviews</StyledLink>
          <h1>{title || 'No information'}</h1>
          <h2>Score : {fixedVote || 'No information'}</h2>
          <h2>Overview :</h2>
          <p>{overview || 'No information'}</p>
          <h2>Genres :</h2>
          {genres &&
            genres.map(({ id, name }) => {
              return <p key={id}>{name}</p>;
            })}
        </TextWrapper>
      </Wrapper>
    </>
  );
}

MovieOverview.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      vote_average: PropTypes.number.isRequired,
      title: PropTypes.string,
      overview: PropTypes.string,
      poster_path: PropTypes.none,
      ganres: PropTypes.none,
    })
  ),
};
