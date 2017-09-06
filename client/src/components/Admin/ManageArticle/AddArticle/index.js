import React from 'react';
import './style.scss';
import {Form,FormGroup, Row, Col, Input} from 'reactstrap';
export default class AddArtic extends React.Component{
    render(){
        return(
            <Form>
                <FormGroup>
                    <Row>
                        <Col md="3"><p>Title</p></Col>
                        <Col md="5">
                            <Input type="text"/>
                        </Col>
                    </Row>
                </FormGroup>
                <FormGroup>
                    <Row>
                        <Col md="3"><p>Status</p></Col>
                        <Col md="9">
                        <Input type="select" className="dropdown">
                                <option>Drafr</option>
                                <option>Published</option>
                            </Input>
                        </Col>
                    </Row>
                </FormGroup>
                <FormGroup>
                    <Row>
                        <Col md="3"><p>ImageURL</p></Col>
                        <Col md="5">
                            <Input type="file"/>
                        </Col>
                    </Row>
                </FormGroup>
                <FormGroup>
                    <Row>
                        <Col md="3"><p>Description</p></Col>
                        <Col md="5">
                            <Input type="textarea"/>
                        </Col>
                    </Row>
                </FormGroup>
               <Input type="button" value="Save" className="Save"/>
               <Input type="button" value="Save" className="Save"/>
            </Form>
        );
    }
}