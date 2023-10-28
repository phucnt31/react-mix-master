import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  HomeLayout,
  About,
  Landing,
  Error,
  Newsletter,
  Cocktail,
} from "./components";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        {
          index: true,
          element: <Landing />,
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
