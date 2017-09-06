import React from 'react';
import './style.scss';
import LinkTable from 'components/Admin/LinkTable';
import {Container, Row, Col} from 'reactstrap';
import AddPets from 'components/Admin/ManagePet/AddPets';
export default class AddPeta extends React.Component{
    render(){
        return(
            <Container>
                <Row><Col><h1>Leopetra</h1></Col></Row>
                <Row><Col><hr /></Col></Row>
                <Row>
                    <Col md="3">
                    <LinkTable/>
                    </Col>
                    <Col md="9">
                        <Row><Col><h3>Pet Details</h3></Col></Row>
                        <Row><Col><hr/></Col></Row>
                        <Row>
                            <Col>
                                <AddPets />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }
}