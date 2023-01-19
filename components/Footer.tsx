import styled from "styled-components";

import React from "react";

const Footer = () => {
  return (
    <div>
      <FooterContainer>
        <FooterContent>
          React + TS Todo <Span>@ 2021</Span>
        </FooterContent>
      </FooterContainer>
    </div>
  );
};

const FooterContainer = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  background: #333232;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const FooterContent = styled.p`
  font-size: 1.4em;
  color: #3ccece;
  font-weight: bold;
`;
const Span = styled.span`
  color: #f6f6f6;
  font-weight: normal;
`;

export default Footer;
