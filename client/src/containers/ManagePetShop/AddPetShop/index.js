import React from 'react';
import './style.scss';
import {Container, Row, Col} from 'reactstrap';
import LinkTable from 'components/Admin/LinkTable';
import AddPetShop from 'components/Admin/ManagePetShop/AddPetShop';
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
                        <Col>
                            <h3>Pet Shop Details</h3>
                        </Col>
                    </Row>
                    <Row><Col><hr/></Col></Row>
                    <Row><Col><AddPetShop /></Col></Row>
                </Col>
            </Row>
        </Container>
    );
  }
}
