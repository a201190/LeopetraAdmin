import React from 'react';
import './style.scss';
import {Link} from 'react-router-dom';
import {Container, Row, Col} from 'reactstrap';
import LinkTable from 'components/Admin/LinkTable';
export default class ManagePet extends React.Component {
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
                    <Col md="9">
                        <h3>Pet Groom</h3>
                    </Col>
                    <Col md="3">
                        <Link type="button" className="AddPetGroom" to="/ManagePetGrooms/AddPetGroom">Add Pet Groom</Link>
                    </Col>
                </Row>
                <Row><Col><hr /></Col></Row>
                <Row><Col></Col></Row>
                </Col>
            </Row>
        </Container>
    );
  }
}
