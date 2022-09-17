import { Routes, Route } from "react-router-dom";
import { About } from "./pages/About";
import { History } from "./pages/History";
import { Events } from "./pages/Events";

export const routes = [
  { component: <About />, title: "Home", path: "/" },
  { component: <History />, title: "nossa história", path: "/history" },
  { component: <div>history</div>, title: "projetos", path: "/projects" },
  { component: <Events />, title: "eventos", path: "/events" },
  { component: <div>history</div>, title: "blog", path: "/blog" },
  { component: <div>history</div>, title: "comunidade", path: "/community" },
];

/*
Component that has the only goal of creating the pages that
the application has.
*/
export const Router = () => {
  return (
    <Routes>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} element={route.component} />
      ))}
    </Routes>
  );
};
