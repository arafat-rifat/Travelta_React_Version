
import RootLayOut from "./Components/RootLayOut";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";

let router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayOut />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}


export default App;
