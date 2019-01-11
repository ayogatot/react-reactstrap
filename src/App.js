import React, { Component } from 'react';
import styled from "styled-components";


import Header  from "./components/Header";
import CarouselSection from "./components/Carousel";
import CardSection from "./components/Card";

const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <CarouselSection />

        {/* <CardSection />         */}
      </div>
    );
  }
}

export default App;
