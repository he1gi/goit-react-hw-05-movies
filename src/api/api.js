import axios from 'axios';

const API_KEY = '126685e3c97a05ce8ea69747c86f816b';
const BASE_URL = 'https://api.themoviedb.org/3/';

export function getTranding() {
  return axios
    .get(`${BASE_URL}trending/movie/day?api_key=${API_KEY}`)
    .then(r => r.data.results);
}

export function searchMovie(query) {
  return axios
    .get(
      `${BASE_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
    )
    .then(r => r.data.results);
}

export function getMovieDetails(movieId) {
  return axios
    .get(`${BASE_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`)
    .then(r => r.data);
}

export function getMovieCredits(movieId) {
  return axios
    .get(
      `${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
    )
    .then(r => r.data.cast);
}

export function getMovieReviews(movieId) {
  return axios
    .get(
      `${BASE_URL}movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
    )
    .then(r => r.data.results);
}
