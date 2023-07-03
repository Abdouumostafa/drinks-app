import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { About, HomeLayout, Landing, Error, Newsletter, Cocktail, SingleErrorPage  } from "./pages";
import { loader as landingLoader } from "./pages/Landing";
import { loader as singlePageLoader } from "./pages/Coacktail";
import { action as newsletterAction } from "./pages/Newsletter";

const router = createBrowserRouter([
  {
  path: '/',
  element: <HomeLayout />,
  errorElement: <Error/>,
  children: [
    {
  index: true ,
  element: <Landing />,
  errorElement: <SingleErrorPage />,
  loader: landingLoader,
},
    {
      // IMPORTANT
  path: 'coacktail/:id',
  element: <Cocktail />,
  loader: singlePageLoader,
},
    {
  path: 'newsletter',
  element: <Newsletter />,
  action: newsletterAction,
},
    {
  path: '/about',
  element: <About />
},
  ]
},
])

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
