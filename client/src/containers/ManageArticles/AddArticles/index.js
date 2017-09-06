import React from 'react';
import './style.scss';
import {Container, Row, Col} from 'reactstrap';
import AddArticles from 'components/Admin/ManageArticle/AddArticle';
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
                        <Col>
                            <h3>Article Details</h3>
                        </Col>
                    </Row>
                    <Row><Col><hr/></Col></Row>
                    <Row><Col><AddArticles /></Col></Row>
                </Col>
            </Row>
        </Container>
    );
  }
}
