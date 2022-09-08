import { Routes, Route } from "react-router-dom";
import { About } from "./pages/About";

export const routes = [
  { about: <About />, title: "sobre nós", path: "/" },
  { history: <div>history</div>, title: "nossa história", path: "/history" },
  { projects: <div>history</div>, title: "projetos", path: "/projects" },
  { events: <div>history</div>, title: "eventos", path: "/events" },
  { blog: <div>history</div>, title: "blog", path: "/blog" },
  { community: <div>history</div>, title: "a comunidade", path: "/community" },  
];

/*
Component that has the only goal of creating the pages that
the application has.
*/
export const Router = () => {
  return (
    <Routes>
      <Route exact path="/" element={routes[0].about} />
      {Object.keys(routes).map((route, index) => (
        <Route key={index} path={route} element={routes[route]} />
      ))}
    </Routes>
  );
};
