import React, {Component} from "react"
import { Image, Grid, Row, Col, Panel } from 'react-bootstrap';
import "./ResultsMock.css"

class ResultsMock extends Component {
  render() {
    function handleClick() {
        //alert('You have clicked on me');
    }

    return (
        <Grid>
          <Row>
            <Col sm={12} >
            <h1>Results for "Javascript"</h1>
            </Col>
            <Col sm={3} >
              <Panel onClick={handleClick}>
                <Panel.Body>
                <Image src="https://avatars2.githubusercontent.com/u/26122701?s=400&amp;u=3f719cce8777e3aef191160202823845045a6943&amp;v=4" thumbnail />
                </Panel.Body>
              </Panel>
            </Col>
            <Col sm={3} >
              <Panel onClick={handleClick}>
                <Panel.Body>
                <Image src="https://avatars0.githubusercontent.com/u/6628326?s=400&v=4" thumbnail />
                </Panel.Body>
              </Panel>
            </Col>
            <Col sm={3} >
              <Panel onClick={handleClick}>
                <Panel.Body>
                <Image src="https://avatars1.githubusercontent.com/u/4492670?s=400&v=4" thumbnail />
                </Panel.Body>
              </Panel>
            </Col>
            <Col sm={3} >
              <Panel onClick={handleClick}>
                <Panel.Body>
                <Image src="https://avatars0.githubusercontent.com/u/25258332?s=400&v=4" thumbnail />
                </Panel.Body>
              </Panel>
            </Col>
          </Row>

          <Row>
            <Col sm={3} >
              <Panel onClick={handleClick}>
                <Panel.Body>
                <Image src="https://avatars0.githubusercontent.com/u/407?s=460&v=4" thumbnail />
                </Panel.Body>
              </Panel>
            </Col>
          </Row>



        </Grid>
        )
  }
};


export default ResultsMock;
