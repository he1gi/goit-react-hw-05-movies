import { getTranding } from 'api/api';
import { useState, useEffect, Suspense } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import TrandingMovies from 'components/TrandingMovies';
import Loader from 'components/Loader';

import { List } from '../pages.styled';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    getTranding()
      .then(r => {
        setMovies([...r]);
      })
      .catch(e => {
        setError(e.message);
        if (error !== null) {
          toast.error(`Ошибка ${error}`, {
            autoClose: 1000,
          });
        }
      })
      .finally(() => setIsLoading(false));
  }, [error]);

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <ToastContainer />
        {isLoading && <Loader />}
        <h1>Trending films</h1>
        <List>
          <TrandingMovies movies={movies} />
        </List>
      </Suspense>
    </>
  );
}
