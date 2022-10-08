import { Outlet } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from 'api/api';

import MovieOverview from 'components/MovieOverview';

export default function MovieDetails() {
  const { movieId } = useParams();
  const [details, setDetails] = useState([]);

  useEffect(() => {
    getMovieDetails(movieId).then(setDetails);
  }, [movieId]);

  return (
    <div>
      {details && <MovieOverview details={details} />}
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
}
