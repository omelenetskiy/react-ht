import Home from '../components/home/Home';
import Movie from '../components/moviePreview/MoviePreview';

const routes = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/search',
    component: Home,
    exact: true,
  },
  {
    path: '/movie/:id',
    component: Movie,
  },
];

export default routes;
