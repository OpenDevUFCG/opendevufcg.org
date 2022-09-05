import React from "react";
import { Link } from "react-router-dom";
import { Links, HeaderContainer } from "./styles";

export const Header = () => {
  const pages = [
    { title: "sobre nós", path: "/" },
    { title: "nossa história", path: "" },
    { title: "projetos", path: "" },
    { title: "eventos", path: "" },
    { title: "blog", path: "" },
    { title: "a comunidade", path: "" },
  ];

  return (
    <HeaderContainer>
      <Links>
        {pages.map((page) => {
          return (
            <li key={page.title}>
              <Link to={page.path}>{page.title}</Link>
            </li>
          );
        })}
      </Links>
    </HeaderContainer>
  );
};
