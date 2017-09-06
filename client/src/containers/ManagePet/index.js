import React from 'react';
import './style.scss';
import {Container, Row, Col} from 'reactstrap';
import LinkTable from 'components/Admin/LinkTable';
import { Link } from 'react-router-dom';
import ManagePet from 'components/Admin/ManagePet';
export default class ManagePeT extends React.Component {
  render() {
    return (
        <Container>
            <Row><Col><h1>Leopetra</h1></Col></Row>
            <Row><Col><hr /></Col></Row>
            <Row>
                <Col md="3">
                    <LinkTable />
                </Col>
                <Col md="9">
                    <Row>
                        <Col md="10">
                            <h3>Pet List</h3>
                        </Col>
                        <Col md="2">
                            <Link type="button" to="/ManagePet/AddPets" className="AddPets">Add Pets</Link>
                        </Col>
                    </Row>
                    <Row><Col><hr /></Col></Row>
                    <Row><Col><ManagePet /></Col></Row>
                </Col>
            </Row>
        </Container>
    );
  }
}
