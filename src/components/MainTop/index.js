import React, { Component } from "react";
import styled from "styled-components";

const Background = styled.div`
  display: flex;
  width: 100%;
  height: 40vw;
  background: url("./assets/background1.jpg") no-repeat;
  opacity: 0.9;
  background-size: cover;
  justify-content: center;
  background-attachment: fixed;
  background-position: center;
  align-items: center;
  font-family: "Dosis", serif;
  flex-direction: column;
  font-size: 35pt;
  color: #1c1c1d;
  font-weight: 600;
  margin-top: 25px;
`;

class MainTop extends Component {
  render() {
    return (
        <Background>
            <p>Sky at the Summit</p>
        </Background>
    );
  }
}

export default MainTop;
