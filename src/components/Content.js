import React, { Component } from 'react';
import '../App.css';
import "bootstrap/dist/css/bootstrap.css";
import { Grid, Row, Col, Button } from "react-bootstrap";

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {items: [], value: ''};
  }

  addItem(event) {
		this.state.items.push(this.state.value);
		this.setState({items: this.state.items});
	}

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  delItem(item){
     const newItems = this.state.items.slice();
     if (newItems.indexOf(item) > -1) {
       newItems.splice(newItems.indexOf(item), 1);
       this.setState({items: newItems})
     }
   }

  render() {

    const list = this.state.items.map((item, index) => {
		  return <li key={index}><span className="input-text">{item}</span>
        <span>
          <Button id={index} bsStyle="danger" bsSize="small" onClick={this.delItem.bind(this, item)}>
            Delete
          </Button>
        </span></li>;
		   });
    return(
      <div className="content">
        <Grid>
          <Row className="show-grid">
            <Col md={8}>
            <h3 className="text-block">
              Input something, pleas, and click button save.
            </h3>
            </Col>
          </Row>
          <Row className="show-grid">
            <Col md={3}>
              <input
              className='test-input'
              value={this.state.value}
              onChange={this.handleChange.bind(this)}
              placeholder='Input value'
              />
            </Col>
            <Col md={3}>
              <Button bsStyle="primary" block onClick={this.addItem.bind(this)}>
                Save
              </Button>
            </Col>
          </Row>
        </Grid>
        <Grid>
        <Row>
          <Col md={8}>
          <h3 className="text-block">
            Your input data
          </h3>
          </Col>
        </Row>
        <Row>
        <Col md={8}>
          <ul>
            {list}
          </ul>
        </Col>
        </Row>
        </Grid>
      </div>
  );
  }
}

export default Content;
