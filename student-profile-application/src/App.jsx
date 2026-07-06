import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Content from "./components/Content";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/topic/:id",
    element: <Content />
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;