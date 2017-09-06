{this.props.data.child.map((child,n,r,p)=>{
    return(
            <div key={n}>
                <Row key={r}>
                    <Col md="1">{n/10+1}</Col>
                    <Col md="11">
                        <Input type="text"/>
                    </Col>
                </Row>
                <Row key={p}>
                    <Input type="textarea"/>
                </Row>
            </div>                            
        );})}