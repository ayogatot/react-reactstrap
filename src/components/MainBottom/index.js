import React, { Component } from "react";
import styled from "styled-components";

const Background = styled.div`
  display: flex;
  width: 100%;
  height: 40vw;
  background: url("./assets/background2.jpg") no-repeat;
  opacity: 0.9;
  background-size: cover;
  justify-content: center;
  background-attachment: fixed;
  background-position: center;
  align-items: center;
  font-family: "Bungee Inline", cursive;
  flex-direction: column;
  font-size: 35pt;
  color: #f2f2ff;
  margin: 25px 0 25px 0;
`;

class MainBottom extends Component {
  render() {
    return (
      <Background>
        <p>The Darkest Skies</p>
      </Background>
    );
  }
}

export default MainBottom;
