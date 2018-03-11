import React, {Component} from "react"
import { FormControl, Grid, Row, Col } from 'react-bootstrap';
import "./Search.css"
import Results from "../Results"

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
          <input type="text" placeholder="I want to learn..."  value = {this.state.term} onChange={(event)=> this.setState({ term: event.target.value})}/>
          </Col>
          </Row>
        </Grid>
        <Results term = {this.state.term}/>
        </div>
        );
  }
};


export default Search;
