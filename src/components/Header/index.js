import React, { Component } from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import styled from "styled-components";

const Navigation = styled.div`
  font-family: "Dosis", sans-serif;
  font-weight: 600;
`;

const Padding = {
  marginLeft:"10px"
}

class Header extends Component {
  render() {
    return (
      <Navigation>
        <Navbar className="bg-dark" expand="md">
          <NavbarBrand className="text-white">NAVIMON</NavbarBrand>
          <Nav className="ml-auto">
            <NavItem>
                <input className="form-control" type="search" placeholder="Search" />
            </NavItem>
            <NavItem>
                <button style={Padding} className="btn btn-outline-light" type="submit">Search</button>
            </NavItem>
          </Nav>
        </Navbar>
      </Navigation>
    );
  }
}

export default Header;
