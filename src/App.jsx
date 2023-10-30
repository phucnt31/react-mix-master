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
import { loader as cocktailLoader } from "./components/Cocktail";
import { action as newsletterAction } from "./components/Newsletter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});

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
          loader: landingLoader(queryClient),
          errorElement: <SinglePageError />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "cocktail/:id",
          element: <Cocktail />,
          loader: cocktailLoader,
        },
        {
          path: "newsletter",
          element: <Newsletter />,
          action: newsletterAction,
        },
      ],
    },
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
export default App;
