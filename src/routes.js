import { Routes, Route } from "react-router-dom";
import { About } from "./pages/About";

const routes = {
  about: <About />,
  history: <div>history</div>,
  projects: <div>history</div>,
  events: <div>history</div>,
  blog: <div>history</div>,
  community: <div>history</div>,
};

/*
Component that has the only goal of creating the pages that
the application has.
*/
export const Router = () => {
  return (
    <Routes>
      <Route exact path="/" element={routes.about} />
      {Object.keys(routes).map((route, index) => (
        <Route key={index} path={route} element={routes[route]} />
      ))}
    </Routes>
  );
};
