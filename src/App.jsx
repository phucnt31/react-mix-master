import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  HomeLayout,
  About,
  Landing,
  Error,
  Newsletter,
  Cocktail,
  SinglePageError,
} from "./components";
import { loader as landingLoader } from "./components/Landing";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Landing />,
          loader: landingLoader,
          errorElement: <SinglePageError />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "cocktail",
          element: <Cocktail />,
        },
        {
          path: "newsletter",
          element: <Newsletter />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};
export default App;
