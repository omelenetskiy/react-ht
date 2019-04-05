import SearchForm from '../components/searchForm/SearchForm';
import MoviePreview from '../components/moviePreview/MoviePreview';

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
];
