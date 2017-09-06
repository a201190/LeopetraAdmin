import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import {Container, Row, Col, Input} from 'reactstrap';
export default class Navbar extends React.Component {
  render() {
    return (
      <Container> 
        <Row>
          <Col><h1>Leopetra</h1></Col>
        </Row>
        <Row>
          <Col md="12">
            <hr/>
          </Col>
        </Row>
        <Row>
          <Col md="3"></Col>
          <Col md="6" className="LoginBox">
          <br/>
            <Row>
              <Col>
                <h3>Login</h3>
              </Col>
            </Row>
            <Row>
              <Col md="3">User Name:</Col>
              <Col md="9">
                <Input type="text"/>
              </Col>
            </Row>
            <br/>
            <Row>
              <Col md="3">Password:</Col>
              <Col md="9">
                <Input type="text"/>
              </Col>
            </Row>
            <br/>
            <Row>
              <Col md="3"></Col>
              <Col md="9">
                <Link type="button" value="Login" className="Login" to="/ManagePetFeature">Login</Link>
              </Col>
            </Row>
            <br/>
          </Col>
          <Col md="3"></Col>
        </Row>
      </Container>
    )
  }
}
