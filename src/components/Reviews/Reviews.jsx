import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import { getMovieReviews } from 'api/api';

import ReviewInfo from 'components/ReviewInfo';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieReviews(movieId)
      .then(setReviews)
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
      {reviews.length !== 0 ? (
        <ReviewInfo reviews={reviews} />
      ) : (
        <h1>No information about Reviews</h1>
      )}
    </>
  );
}
