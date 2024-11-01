import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ResponsiveAppBar from "@/components/navBar/page";
import routes from "./appRoutes";

function App() {
  return (
    <Router>
      <ResponsiveAppBar />
      <div className="App">
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
