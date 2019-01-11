import React, { Component } from "react";
import styled from "styled-components";

const FooterStyle = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Dosis", sans-serif;
  margin-bottom: 25px;
  font-size: 20px;
`;

class Footer extends Component {
  render() {
    return <FooterStyle>copyright @ ayogatot 2019</FooterStyle>;
  }
}

export default Footer;
