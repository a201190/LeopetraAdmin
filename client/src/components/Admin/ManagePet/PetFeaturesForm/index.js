import React from 'react';
import './style.scss';
import {Container, Row, Col, Input} from 'reactstrap';
export default class PetFeaturesForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:[
                {
                    id:1,
                    name:[{
                        val:'Amit Kumar Sharma'
                    },{
                        val:'alokoakxo'
                    },{
                        val:'lsmclsm'
                    },{
                        val:'lsmclsm'
                    },{
                        val:'lsmclsm'
                    }]
                },
                {
                    id:2,
                    name:[{
                        val:'Amit Kumar Sharma'
                    },{
                        val:'alokoakxo'
                    },{
                        val:'lsmclsm'
                    }]
                }
            ]
        }
    }
    render(){
        return(
            <Container className="PetFeaturesTable">
                <Row>
                    <Col className="header">
                        <h3>Features</h3>
                    </Col>
                </Row>
                {this.state.data.map((data, i)=>{
                    return(
                        <Row key={data.id}>
                            <Col key={data.id}>
                                {data.name.map((name,j)=>{
                                    return(
                                        <Row key={j} className="bor">
                                            <Col md="1" className="bor"><p>{data.id+j/10}</p></Col>
                                            <Col md="9" className="bor">{name.val}</Col>
                                            <Col md="2" className="bor">
                                                <Input type="text"/>
                                            </Col>
                                        </Row>
                                        );})}
                                       </Col>
                                       </Row>
                                       );})}
                </Container>);}}