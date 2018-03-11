import React, {Component} from "react"
import { FormControl, FormGroup, Button, Grid, Row, Col } from 'react-bootstrap';
import "./Search.css"
import Results from "../Results";
// import { Link } from "react-router-dom";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {term: ''};
  }
  
  render() {
    return (
      <div>
        <Grid>
          <Row>
          <Col sm={12} md={6} mdOffset={3}>
          <br />
          <FormGroup action="/results">
            <FormControl type="text" placeholder="I want to learn..." value = {this.state.term} onChange={(event)=> this.setState({ term: event.target.value})}/>
            <br />
            {/* <Button bsStyle="info pull-right" onClick = {(event)=> this.setState({ term: event.target.value})}>Take Action</Button> */}
            {/* <Link to="/results">Learn</Link> */}
            <a bsClass="btn btn-info" href="/results">Take Action</a>
          </FormGroup>
          </Col>
          </Row>
        </Grid>
        {/* <Results term = {this.state.term}/> */}
        </div>
        );
  }
};


export default Search;
