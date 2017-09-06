import React from 'react';
import { Link } from 'react-router-dom';
import {Container, Row, Col} from 'reactstrap';
export default class LinkTable extends React.Component{
    render(){
        return(
            <Container>
                <Row>
                    <Col>
                        <Link to="/ManagePetFeature">Manage Pet Feature</Link>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Link to="/ManagePet">Manage Pets</Link>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Link to="/ManageVets">Manage Vets</Link>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Link to="/ManagePetShops">Manage Pet Shops</Link>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Link to="/ManagePetGrooms">Manage Pet Grooms</Link>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Link to="/ManagePetTrainers">Manage Pet Trainers</Link>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Link to="/ManageEvents">Manage Events</Link>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Link to="/ManageArticles">Manage Articles</Link>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Link to="/ManageResturents">Manage Resturents</Link>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Link to="/ManageAdoptions">Manage Adoptions</Link>
                    </Col>
                </Row>
            </Container>
        );
    }
}