import React from 'react';
import './style.scss';
import {Form,Input, FormGroup, Row, Col} from 'reactstrap';
export default class AddPets extends React.Component{
    Save(){
        alert("data is submited")
    }
    Cancel(){

    }
    render(){
        return(
            <Form>
               <FormGroup>
                   <Row>
                       <Col md="3"><p>Pet Trainer Name:</p></Col>
                       <Col md="9">
                        <Input type="text" className="Allinput"/>
                       </Col>
                   </Row>
               </FormGroup>
               <FormGroup>
                   <Row>
                       <Col md="3"><p>Pet Groom Description:</p></Col>
                       <Col md="9">
                            <Input type="textarea" className="Allinput"/>
                       </Col>
                   </Row>             
               </FormGroup>
               <FormGroup>
                    <Row>
                       <Col md="3">
                            <p>Image Url:</p>
                       </Col>
                       <Col md="9">
                            <Input type="file" className="Allinput"/>
                       </Col>
                   </Row>
               </FormGroup>
               <FormGroup>
                    <Row>
                       <Col md="3">
                            <p>Contact Number:</p>
                        </Col>
                       <Col md="9">
                            <Input type="tel" className="Allinput"/>
                       </Col>
                   </Row>
               </FormGroup>
               <FormGroup>
                    <Row>
                       <Col md="3"><p>Email:</p></Col>
                       <Col md="9">
                            <Input type="email" className="Allinput"/>
                       </Col>
                   </Row>
               </FormGroup>
               <FormGroup>
                    <Row>
                       <Col md="3"><p>Website:</p></Col>
                       <Col md="9">
                            <Input type="text" className="Allinput"/>
                       </Col>
                    </Row>                
               </FormGroup>
               <FormGroup>
                    <Row>
                       <Col md="3"><p>Area:</p></Col>
                       <Col md="9">
                            <Input type="text" className="Allinput"/>
                       </Col>
                    </Row>
               </FormGroup>
               <FormGroup>
                    <Row>
                       <Col md="3">
                            <p>Address:</p>
                       </Col>
                       <Col md="9">
                            <Input type="textarea" className="Allinput"/>
                       </Col>
                    </Row>                
               </FormGroup>
               <FormGroup>
                    <Row>
                       <Col md="3"><p>City:</p></Col>
                            <Col md="9">
                            <Input type="select" className="dropdown">
                                <option>Select Type</option>
                                <option>Mumbai</option>
                                <option>Navi Mumbai</option>
                                <option>Bengaluru</option>
                                <option>Mysure</option>
                                <option>Mengaluru</option>
                                <option>Pune</option>
                                <option>Hyderabad</option>
                                <option>Thane</option>
                            </Input>
                       </Col>
                    </Row>
                </FormGroup>
               <FormGroup>
                    <Row>
                       <Col md="3"><p>PinCode:</p></Col>
                       <Col md="9">
                            <Input type="text" className="Allinput"/>
                       </Col>
                    </Row>                                    
               </FormGroup>
               <FormGroup>
                    <Row>
                       <Col md="3"><p>Latitude:</p></Col>
                       <Col md="9">
                            <Input type="text" className="Allinput"/>
                       </Col>
                    </Row>                                    
               </FormGroup>
               <FormGroup>
                    <Row>
                       <Col md="3"><p>Longitude:</p></Col>
                       <Col md="9">
                            <Input type="text" className="Allinput"/>
                       </Col>
                    </Row>                                    
               </FormGroup>
               <FormGroup>
                    <Row>
                       <Col md="3"><p>Working Duration:</p></Col>
                       <Col md="2">
                            <Input type="time" />
                       </Col>
                       <Col md="2">
                            <Input type="time" />
                       </Col>
                       <Col md="5"></Col>
                    </Row>                                    
               </FormGroup>
               <FormGroup>
                    <Row>
                       <Col md="3"><p>Pet Types:</p></Col>
                       <Col md="9">
                       <Input type="select" className="dropdown">
                                <option>Select Type</option>
                                <option>Dogs</option>
                                <option>Cats</option>
                                <option>Fish</option>
                            </Input>
                       </Col>
                    </Row>                                    
               </FormGroup>              
               <Input type="button" value="Save" className="Save" onClick={(()=>{
                    this.Save();
               })}/>
               <Input type="button" value="Cancel" className="Save" onClick={(()=>{
                    this.Cancel();
               })}/>
               <br/>
               <br/>
            </Form>
        );
    }
}