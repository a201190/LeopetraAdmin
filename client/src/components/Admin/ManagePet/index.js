import React from 'react';
import './style.scss';
import {Container,Row, Col} from 'reactstrap';
export default class Manpet extends React.Component{
    constructor(){
        super();
        this.state={
            Header:[
                {id:"PetTitle"},
                {id:"PetDescription"},
                {id:"ImageURL"},
                {id:"LifeSpan"},
                {id:"Weight"},
                {id:"Height"},
                {id:"Colors"},
                {id:"Temprament"},
                {id:"Nature"},
                {id:"HairLength"},
                {id:""},
                {id:""}
            ],
            data:{}
        }
    }
    render(){
        return(
            <Container>
                <Row>
                {this.state.Header.map((Header,i)=>{
                    return(
                        <Col md="1" key={i}>{Header.id}</Col>
                        );
                })}
                </Row>
            </Container>
        );
    }
}