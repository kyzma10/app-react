import React, { Component } from 'react';
import '../App.css';
import "bootstrap/dist/css/bootstrap.css";
import { Grid, Row, Col, Button } from "react-bootstrap";

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {items: [], inputValue: ''};
    this.handleChange = this.handleChange.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  addItem(e) {
    e.preventDefault();
    const newItem = {
      text: this.state.inputValue,
      id: Date.now()
    }
    this.setState({
      items: [...this.state.items, newItem],
      inputValue: ''
    })
	}

  handleChange(e) {
    this.setState({
      inputValue: e.target.value
    });
  }

  delItem(id){
     this.setState(prevState => ({
       items: prevState.items.filter(items => items.id !== id)
     }))
   }

  render() {
    return(
      <div className="content">
        <Grid>
          <Row className="show-grid">
            <Col md={8}>
            <h3 className="text-block">
              Input something, please, and click button save.
            </h3>
            </Col>
          </Row>
          <Row className="show-grid">
            <Col md={3}>
              <input
              className='test-input'
              value={this.state.inputValue}
              onChange={this.handleChange}
              placeholder='Input value'
              />
            </Col>
            <Col md={3}>
              <Button bsStyle="primary" block onClick={this.addItem}>
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
          <ul className="input-data">
            {
              this.state.items.length > 0 ? (
              this.state.items.map((item) => (
                <li key={item.id}>{item.text}
                <Button id={item.id} bsStyle="danger" bsSize="small" onClick={()=> this.delItem(item.id)}>
                  Delete
                </Button>
                </li>)
                )
              ) : (
                <div><h3>No input data!!!</h3></div>
              )
            }
          </ul>
        </Col>
        </Row>
        </Grid>
      </div>
  );
  }
}

export default Content;
