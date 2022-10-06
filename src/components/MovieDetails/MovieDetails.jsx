import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from 'api/api';

import MovieOverview from 'components/MovieOverview';

export default function MovieDetails() {
  const { movieId } = useParams();
  const [details, setDetails] = useState([]);
  //   console.log(movieId);

  useEffect(() => {
    getMovieDetails(movieId).then(setDetails);
  }, [movieId]);

  return (
    <div>
      {details && <MovieOverview details={details} />}
      {/* <Outlet /> */}
    </div>
  );
}
