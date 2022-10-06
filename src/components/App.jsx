// import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import SharedLayout from './SharedLayout';
import Home from '../pages/Home';
import Movie from '../pages/Movies';
import MovieDetails from 'components/MovieDetails';
import Cast from './Cast';
import Reviews from './Reviews';

// const Home = lazy(() => import('../pages/Home/Home'));

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movie />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </div>
  );
}
