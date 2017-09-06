import React from 'react';
import './style.scss';
import {Form, FormGroup, Input, Row, Col} from 'reactstrap';
export default class ManagePetFeatures extends React.Component{
    constructor(props){
        super(props);
        this.AddFeatures=this.AddFeatures.bind(this);
        this.AddSubItem=this.AddSubItem.bind(this);
        this.state={
            data:[
                {   id:1,
                    child:[{header:"", Features:""}],
                },{   
                    id:2,
                    child:[{header:"", Features:""}],
                }
            ],
            currentTask:{child:[]}
        }
    }
    AddSubItem(){
            var child=this.state.data.child;
            let Task=this.state.data.Task;
            child.push({
                child, Task
            })
            this.setState({
                
                    Task:'', child
            })
       }
       AddFeatures(){
        let data=this.state.data;
        let currentTask=this.state.currentTask;
        data.push({
            data, currentTask
        })
        this.setState({
            currentTask, data
        })
       }
    render(){ 
        return(
             <Form>
                <FormGroup>
                {this.state.data.map((data,i)=>{return(
                    <div key={i}>
                        {data.child.map((child,j,l,m)=>{
                            return(
                            <div key={j}>
                                <Row key={data.id}>
                                    <Col md="1">{i+j/10+1}</Col>
                                    <Col md="11">
                                        <Input type="text" className="Head"/>
                                    </Col>
                                </Row>
                                <Row key={m}>
                                    <Col>
                                        <Input type="textarea" className="child" value={child.Features}/>
                                    </Col>
                                </Row>
                            </div>
                        );})}
                        <Input type="button" value="Add Sub Items" className="AddSubItem" 
                        onClick={((index)=>{
                        this.AddSubItem();
                        })} />
                    </div>
            
                )})}
            </FormGroup>
            <Input type="button" value="Add Features" className="AddFeatures"
                onClick={(()=>{
                this.AddFeatures();
            })}/>
            <br/>
            <Input type="button" value="Save" className="Save" onClick={(()=>{
            })}/>
            </Form>
        );
    }
}