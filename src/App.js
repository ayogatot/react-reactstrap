import React, { Component } from 'react';

import Header  from "./components/Header";
import CarouselSection from "./components/Carousel";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <CarouselSection />
      </div>
    );
  }
}

export default App;
