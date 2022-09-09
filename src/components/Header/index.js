import React from "react";
import { Links, HeaderContainer, Link } from "./styles";
import Point  from "../../assets/point.svg"
import { NavLink } from "react-router-dom";
import { routes } from "../../routes";

export const Header = () => {
  return (
    <HeaderContainer>
      <Links>
        {routes.map((page) => {
          return (
            <Link key={page.title}>
              <NavLink to={page.path} className="selected">{page.title}</NavLink>
              <img src={Point} alt="icone em forma geometrica de losango azul"/>
            </Link>
          );
        })}
      </Links>
    </HeaderContainer>
  );
};
