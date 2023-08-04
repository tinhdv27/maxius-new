import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./../Common/Header/Header";
import routes from "./Pages";

const RoutesPage = () => {
  return (
    <BrowserRouter>
      <div className="sidemenu">
        <Header />
      </div>
      <div className="home">
        <Routes>
          {routes.map((route, index) => (
            <Route path={route.path} element={route.element} key={index} />
          ))}
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default RoutesPage;
