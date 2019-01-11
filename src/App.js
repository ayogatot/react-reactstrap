import React, { Component } from 'react';

import Header  from "./components/Header";
import CarouselSection from "./components/Carousel";
import MainTop from "./components/MainTop";
import CardSection from "./components/Card";
import MainMiddle from "./components/MainMiddle";
import MainBottom from "./components/MainBottom";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <CarouselSection />
        <MainTop />
        <MainMiddle />
        <CardSection />
        <MainBottom />
        <Footer />        
      </div>
    );
  }
}

export default App;
