import React, { Component } from 'react';
import '../App.css';
import "bootstrap/dist/css/bootstrap.css";
import { Navbar, NavItem, Nav, Grid, Row, Col } from "react-bootstrap";

class Content extends Component {
  render() {
    return(
      <div className="content">
        <Grid>
          <Row>
            <Col sm={8}>
              <p>
                Lorem ipsum........
              </p>
            </Col>
          </Row>
        </Grid>
      </div>
  );
  }
}

export default Content;
