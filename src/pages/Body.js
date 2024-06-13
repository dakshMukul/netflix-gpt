import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "../components/Login";
import Browse from "./Browse";
import ErrorPage from "./ErrorPage";
import MovieDetails from "./MovieDetails";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/movieDetails/:movieId",
      element: <MovieDetails />,
    },
    {
      path: "/error",
      element: <ErrorPage />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter}></RouterProvider>
    </div>
  );
};

export default Body;
