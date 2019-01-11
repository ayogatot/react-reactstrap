import React, { Component } from "react";
import styled from "styled-components";

const Middle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50px;

  h1 {
    font-family: "Contrail One", cursive;
    color: #3c3d3e;
  }

  h3 {
    font-family: "Contrail One", cursive;
    color: #7d7d7d;
  }

  p {
    color: #3c3d3e;
  }
`;

class MainMiddle extends Component {
  render() {
    return (
      <Middle>
        <h1>Aoraki Mackenzie</h1>
        <h3>International Dark Sky Reserve, New Zealand</h3>
        <p>
          Aoraki Mackenzie is privy to the best night sights of the southern
          hemisphere. You can see the Aurora Australis, the Southern Cross and
          the Southern Star.
        </p>
      </Middle>
    );
  }
}

export default MainMiddle;
