import React, {Component, Fragment} from 'react';
import {Container,Row,Col,Button} from "react-bootstrap";

class TopBanner extends Component {
    render() {
        return (
           <Fragment>
               <Container fluid={true} className="topFixedBanner p-0">
                    <Row>
                        <Col className="topBannerContent">
                            <h1>Software Developer</h1>
                            <p>Full Stack Web Application</p>
                            <Button className="btn btn-primary">More Info</Button>
                        </Col>
                    </Row>
               </Container>
           </Fragment>
        );
    }
}

export default TopBanner;