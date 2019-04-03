import Home from '../components/layout/home/Home';
import Movie from '../components/common/moviePreview/MoviePreview';

const routes = [
  {
    path: ['/', '/search'],
    render: () => Home,
    exact: true,
  },
  {
    path: '/movie/:id',
    component: Movie,
  },
];

export default routes;
