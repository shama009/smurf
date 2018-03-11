import React, {Component} from "react"
import { FormControl, Grid, Row, Col } from 'react-bootstrap';

class Search extends Component {
  render() {
    return (
        <Grid>
          <Row>
          <Col sm={12} md={6} mdOffset={3}>
          <br />
          <FormControl type="text" placeholder="I want to learn..." />
          </Col>
          </Row>
        </Grid>
        )
  }
};


export default Search;
