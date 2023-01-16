import styled from "styled-components";

import React from "react";

const Navbar = () => {
  return (
    <NavbarContainer>
      <TitleNavbar>React + TS Todo</TitleNavbar>
    </NavbarContainer>
  );
};

const NavbarContainer = styled.nav`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #333232;
`;
const TitleNavbar = styled.h1`
  font-size: 3em;
  color: #3ccece;
`;

export default Navbar;
