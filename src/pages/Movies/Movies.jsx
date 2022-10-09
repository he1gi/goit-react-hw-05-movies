import { useState, useEffect, useMemo, Suspense } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import SeachBox from 'components/SeachBox';
import { searchMovie } from 'api/api';
import { List, Img } from '../pages.styled';

import Loader from 'components/Loader';

const KEY = 'query';

export default function Movie() {
  const [movie, setMovie] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const query = searchParams.get('query') ?? window.localStorage.getItem(KEY);

  useEffect(() => {
    if (query) {
      window.localStorage.setItem(KEY, query);
      setIsLoading(true);

      searchMovie(query)
        .then(setMovie)
        .catch(e => {
          setError(e.message);
          if (error !== null) {
            toast.error(`Ошибка ${error}`, {
              autoClose: 1000,
            });
          }
        })
        .finally(() => setIsLoading(false));
    }
  }, [query, error]);

  const changeFilter = value => {
    setSearchParams({ query: value });
  };

  const chosenMovie = useMemo(() => {
    return movie.filter(({ title }) =>
      title.toLowerCase().includes(query.toLowerCase())
    );
  }, [movie, query]);

  return (
    <>
      <ToastContainer />
      <SeachBox value={query} onChange={changeFilter} />
      <Suspense fallback={<div>Loading...</div>}>
        {query && (
          <List>
            {chosenMovie.map(({ title, id, poster_path }) => (
              <li key={id}>
                <Link to={`${id}`}>
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
            ))}
          </List>
        )}
        {isLoading && <Loader />}
      </Suspense>
    </>
  );
}
