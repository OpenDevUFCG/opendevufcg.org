import { Routes, Route } from "react-router-dom";
import { About } from "./pages/About";

export const routes = [
  { component: <About />, title: "sobre nós", path: "/" },
  { component: <div>history</div>, title: "nossa história", path: "/history" },
  { component: <div>history</div>, title: "projetos", path: "/projects" },
  { component: <div>history</div>, title: "eventos", path: "/events" },
  { component: <div>history</div>, title: "blog", path: "/blog" },
  { component: <div>history</div>, title: "a comunidade", path: "/community" },  
];

/*
Component that has the only goal of creating the pages that
the application has.
*/
export const Router = () => {
  return (
    <Routes>
      <Route exact path="/" element={routes[0].component} />
      {routes.map((route, index) => (
         <Route key={index} path={route.path} element={route.component} />
      ))}
    </Routes>
  );
};
