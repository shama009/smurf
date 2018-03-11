import React, {Component} from "react"
import { Grid, Row, Col } from 'react-bootstrap';
import "./Footer.css"

class Footer extends Component {
  render() {
    return (
        <div>
          <Grid className="footer-grid">
            <Row>
            <Col sm={12} >
            <br />
            &copy; smurf development team
            </Col>
            </Row>
          </Grid>
        </div>
    )
  }
};


export default Footer;
