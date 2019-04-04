import SearchForm from '../components/searchForm/SearchForm';
import MoviePreview from '../components/moviePreview/MoviePreview';
import NotFound from '../components/notFound/NotFound';

export default [
  {
    path: '/',
    component: SearchForm,
    exact: true,
  },
  {
    path: '/search/:query',
    component: SearchForm,
  },
  {
    path: '/movie/:id',
    component: MoviePreview,
  },
  {
    path: '/*',
    component: NotFound,
  },
];
