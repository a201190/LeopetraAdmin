import React from 'react';
import './style.scss';
import {Form,Input, FormGroup, Row, Col} from 'reactstrap';
import PetFeaturesForm from 'components/Admin/ManagePet/PetFeaturesForm';
export default class AddPets extends React.Component{
    Save(){
        alert("data is submited")
    }
    render(){
        return(
            <Form>
                <FormGroup>
                    <p>Pet Type:</p>
                    <Input type="select" className="dropdown">
                        <option>Select Type</option>
                        <option>Cats</option>
                        <option>Dogs</option>
                        <option>Fish</option>
                    </Input>
               </FormGroup>
               <FormGroup>
                   <Row>
                       <Col md="3"><p>Pet Titles:</p></Col>
                       <Col md="9">
                        <Input type="text" className="Allinput"/>
                       </Col>
                   </Row>
               </FormGroup>
               <FormGroup>
                   <Row>
                       <Col md="3"><p>Pet Description:</p></Col>
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
                            <p>Life Span:</p>
                        </Col>
                       <Col md="9">
                            <Input type="text" className="Allinput"/>
                       </Col>
                   </Row>
               </FormGroup>
               <FormGroup>
                    <Row>
                       <Col md="3"><p>weight:</p></Col>
                       <Col md="9">
                            <Input type="text" className="Allinput"/>
                       </Col>
                   </Row>
               </FormGroup>
               <FormGroup>
                    <Row>
                       <Col md="3">  <p>Height:</p></Col>
                       <Col md="9">
                            <Input type="text" className="Allinput"/>
                        </Col>
                    </Row>                
               </FormGroup>
               <FormGroup>
               <Row>
                       <Col md="3"><p>Colors:</p></Col>
                       <Col md="9">
                            <Input type="textarea" className="Allinput"/>
                       </Col>
                    </Row>
               </FormGroup>
               <FormGroup>
                    <Row>
                       <Col md="3">
                            <p>Temperament:</p>
                       </Col>
                       <Col md="9">
                            <Input type="textarea" className="Allinput"/>
                       </Col>
                    </Row>                
               </FormGroup>
               <FormGroup>
                    <Row>
                       <Col md="3"><p>Nature:</p></Col>
                            <Col md="9"><Input type="textarea" className="Allinput"/>
                       </Col>
                    </Row>
                </FormGroup>
               <FormGroup>
                    <Row>
                       <Col md="3"><p>Hair Length:</p></Col>
                       <Col md="9">
                            <Input type="text" className="Allinput"/>
                       </Col>
                    </Row>                                    
               </FormGroup>
               <FormGroup>
                   <Row>
                        <Col md="3"> <p>Gallary:</p></Col>
                        <Col md="9">
                            <Input type="file" className="Allinput"/>
                        </Col>
                   </Row>       
               </FormGroup>
               <FormGroup>
                   <Row>
                       <Col md="2">Pet Features:</Col>
                       <Col md="10"><PetFeaturesForm /></Col>
                   </Row>
               </FormGroup>
               <Input type="button" value="Save" className="Save" onClick={(()=>{
                    this.Save();
               })}/>
               <br/>
               <br/>
            </Form>
        );
    }
}