import React, {Component} from "react"
import { FormControl, FormGroup, Button, Grid, Row, Col } from 'react-bootstrap';
import "./Search.css"

class Search extends Component {
  render() {
    return (
        <Grid>
          <Row>
          <Col sm={12} md={6} mdOffset={3}>
          <br />
          <FormGroup>
            <FormControl type="text" placeholder="I want to learn..." />
            <br />
            <Button bsStyle="primary pull-right">Take Action</Button>
          </FormGroup>
          </Col>
          </Row>
        </Grid>
        )
  }
};


export default Search;
