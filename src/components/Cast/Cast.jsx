import { useState, useEffect, Suspense } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import { getMovieCredits } from 'api/api';

import { List } from './Cast.styled';

import CastOverview from '../CastOverview/CastOwerview';

export default function Cast() {
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    getMovieCredits(movieId)
      .then(setCast)
      .catch(e => {
        setError(e.message);
        if (error !== null) {
          toast.error(`Ошибка ${error}`, {
            autoClose: 1000,
          });
        }
      });
  }, [movieId, error]);

  return (
    <>
      <ToastContainer />
      <h2>Additional Information</h2>
      <List>
        <Suspense fallback={<div>Loading page...</div>}>
          <CastOverview cast={cast} />
        </Suspense>
      </List>
    </>
  );
}
