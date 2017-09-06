import React from 'react';
import './style.scss';
import {Link} from 'react-router-dom';
import {Container, Row, Col} from 'reactstrap';
import LinkTable from 'components/Admin/LinkTable'
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
                            <h3>Pet Shop</h3>
                        </Col>
                        <Col md="2"><Link type="button" to="/ManagePetShops/AddPetShop" className="AddPetShop">Add Pet Shop</Link></Col>
                    </Row>
                    <Row><Col><hr/></Col></Row>
                    <Row><Col></Col></Row>
                </Col>
            </Row>
        </Container>
    );
  }
}
