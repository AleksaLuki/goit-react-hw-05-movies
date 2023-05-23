import axios from 'axios';

const API_KEY = 'b0e1f4702184f42f73250a6cc7f87916';

export const getTrendingFilms = async () => {
  const BASE_URL = 'https://api.themoviedb.org/3/trending/movie/week';

  const response = await axios.get(`${BASE_URL}?api_key=${API_KEY}`);

  return response.data;
};

export const getFilmById = async id => {
  const BASE_URL = `https://api.themoviedb.org/3/movie/`;

  const response = await axios.get(`${BASE_URL}/${id}?api_key=${API_KEY}`);

  return response.data;
};

export const getMovieCredits = async id => {
  const BASE_URL = `https://api.themoviedb.org/3/movie/`;

  const response = await axios.get(
    `${BASE_URL}/${id}/credits?api_key=${API_KEY}`
  );

  return response.data;
};

export const getMovieReviews = async id => {
  const BASE_URL = `https://api.themoviedb.org/3/movie/`;

  const response = await axios.get(
    `${BASE_URL}/${id}/reviews?api_key=${API_KEY}&page=1`
  );

  return response.data;
};

export const getMovieByQuery = async query => {
  const BASE_URL = `https://api.themoviedb.org/3/search/movie`;

  const response = await axios.get(
    `${BASE_URL}?api_key=${API_KEY}&query=${query}&page=1`
  );

  return response.data;
};
