import {createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider, Routes} from "react-router-dom";
import Root from "./Root";
import Lander from "../pages/lander/Lander";

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Root />}>
        <Route index element={<Navigate to={'/lander'} replace />} />
        <Route path={'lander'} element={<Lander />} />
    </Route>
))
function App() {
  return (
      <RouterProvider router={router} />
  );
}

export default App;
