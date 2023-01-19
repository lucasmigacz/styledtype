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
  background: #333232;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 200px;
`;
const FooterContent = styled.p`
  font-size: 1.4em;
  color: #3ccece;
  font-weight: bold;
  margin-bottom: 40px;
`;
const Span = styled.span`
  color: #f6f6f6;
  font-weight: normal;
`;

export default Footer;
