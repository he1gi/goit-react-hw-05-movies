import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// import SharedLayout from './SharedLayout';
// import MovieDetails from '../pages/MovieDetails';
// import Movie from '../pages/Movies';
// import Cast from './Cast';
// import Reviews from './Reviews';
// import Home from '../pages/Home';

const SharedLayout = lazy(() =>
  import('../components/SharedLayout/SharedLayout')
);
const Home = lazy(() => import('../pages/Home/Home'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const Movie = lazy(() => import('../pages/Movies/Movies'));
const Cast = lazy(() => import('../components/Cast/Cast'));
const Reviews = lazy(() => import('../components/Reviews/Reviews'));

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
