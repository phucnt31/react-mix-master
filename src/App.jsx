import { RouterProvider, createBrowserRouter } from "react-router-dom";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <h2>hi!!!!</h2>,
    },
    {
      path: "/about",
      element: (
        <div>
          <h2>about page</h2>
        </div>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
};
export default App;
