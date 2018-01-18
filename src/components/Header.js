import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import { Navbar, NavItem, Nav, Grid, Row, Col } from "react-bootstrap";

class Header extends Component {
  render() {
    return(
    <div>
      <Navbar>
        <header>
          <Navbar.Header>
            <Navbar.Brand>
              My Application
            </Navbar.Brand>
          </Navbar.Header>
        </header>
      </Navbar>
    </div>
  );
  }
}

export default Header;
