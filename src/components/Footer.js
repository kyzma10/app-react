import React, { Component } from 'react';
import '../App.css';
import "bootstrap/dist/css/bootstrap.css";

class Footer extends Component {
  render() {
    return(
      <div className="footer">
          <footer>
            <p className="copyright">
              <b>Copyright<sup>&#x2702;</sup> 2018</b>
            </p>
            <p>
              <strong>Private and Policy</strong>
            </p>
          </footer>
      </div>
  );
  }
}

export default Footer;
