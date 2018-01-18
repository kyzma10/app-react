import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

import "bootstrap/dist/css/bootstrap.css";
import { Navbar, NavItem, Nav, Grid, Row, Col } from "react-bootstrap";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
