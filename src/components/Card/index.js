import React, { Component } from "react";
import styled from "styled-components";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

const CardList = styled.section`
  display: flex;
  flex-direction: row;
  font-family: "Dosis", sans-serif;
`;

const CardStyle = {
  margin: "20px",
  height: "40vw",
  boxShadow: "5px 5px 10px #888888",
  cursor: "pointer"
};

const TitleStyle = {
 fontSize:"20px",
 fontWeight:"600"
}

const SubtitleStyle = {
  fontSize:"18px",
  color:"#7d7d7d"
}

const ButtonStyle = {
    width:"100px",
    margin:"0 0 30px 30px"
};

const ImageStyle = {
  width: "100%",
  backgroundSize:"cover",
  marginBottom:"20px"
};

const items = [
  {
    src: "./assets/picture1.jpg",
    alt: "Stargaze",
    caption: "Dark Skies Reserves",
    text:
      "The darkest and clearest skies are between mid-May and mid-July during the new moon from midnight to dawn."
  },
  {
    src: "./assets/picture2.jpg",
    alt: "Milower Land",
    caption: "Sossusvlei Desert Lodge",
    text:
      "Most of the 1.5 million tourists that pass through this region stop to photograph the landscape in the day, she says."
  },
  {
    src: "./assets/picture3.jpg",
    alt: "Black Fell",
    caption: "Nothumberland Heritage Site",
    text:
      "After a night of sky observation, you can step into the former Augustinian priory for authentic Welsh ale.."
  }
];

const cardList = items.map(item => {
  return (
    <div>
      <Card style={CardStyle}>
        <CardBody>
          <CardImg style={ImageStyle} src={item.src} alt={item.alt} />
          <CardTitle style={TitleStyle}>{item.alt}</CardTitle>
          <CardSubtitle style={SubtitleStyle} >{item.caption}</CardSubtitle>
          <CardText>{item.text}</CardText>
        </CardBody>
        <Button style={ButtonStyle} color="primary">More</Button>
      </Card>
    </div>
  );
});

class CardSection extends Component {
  render() {
    return <CardList>{cardList}</CardList>;
  }
}

export default CardSection;
