import {Navigate, Route} from "react-router-dom";
import Root from "./Root";
import Lander from "../pages/lander/Lander";

function App() {
  return (
      <Route path="/" element={<Root />}>
        <Route index element={<Navigate to={'/lander'} replace />} />
        <Route path={'./lander'} element={<Lander />} />
      </Route>
  );
}

export default App;
