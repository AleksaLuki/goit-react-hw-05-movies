import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import Home from '../pages/Home/Home';

const MovieDetails = lazy(() =>
  import('../pages/Movies/MovieDetails/MovieDetails')
);
const Movies = lazy(() => import('../pages/Movies/Movies'));

const Reviews = lazy(() =>
  import('../pages/Movies/MovieDetails/Reviews/Reviews')
);

const Cast = lazy(() => import('../pages/Movies/MovieDetails/Cast/Cast'));

export const App = () => {
  return (
    <>
      <Layout>
        <Suspense>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/movies/" element={<Movies />} />

            <Route path="/movies/:movieId" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Routes>
        </Suspense>
      </Layout>
    </>
  );
};