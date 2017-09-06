import React from 'react';
import './style.scss';
import {Link} from 'react-router-dom';
import {Container, Row, Col} from 'reactstrap';
import LinkTable from 'components/Admin/LinkTable';
import ManageVets from 'components/Admin/ManageVets';
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
                        <Col md="10">
                           <h3>Vet List</h3>
                        </Col>
                        <Col md="2">
                            <Link type="button" to="/ManageVets/AddVets" className="AddVets">Add Vets</Link>
                        </Col>
                    </Row>
                    <Row><Col><hr /></Col></Row>
                    <Row><Col><ManageVets/></Col></Row>
                </Col>
            </Row>
        </Container>
    );
  }
}
