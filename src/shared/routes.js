import Home from "../shared/components/layout/home/Home";
import MoviePreview from "../shared/components/layout/moviePreview/MoviePreview";

const routes = [
  {
    path: "/",
    component: Home,
    exact: true
  },
  {
    path: "/movie/:id",
    component: MoviePreview
  }
];

export default routes;
