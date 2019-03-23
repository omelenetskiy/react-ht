import Home from "../shared/components/layout/home/Home";
import MoviePreview from "../shared/components/common/moviePreview/MoviePreview";

const routes = [
  {
    path: "/",
    component: Home,
    exact: true
  },
  {
    path: "/search",
    component: Home
  },
  {
    path: "/movie/:id",
    component: MoviePreview
  }
];

export default routes;
