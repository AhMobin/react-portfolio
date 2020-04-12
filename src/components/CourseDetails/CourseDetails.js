import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import {BigPlayButton, Player} from "video-react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";

class CourseDetails extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="topBreadcrumb">
                    <Row>
                        <Col lg={6} md={12} sm={12}>
                            {/*<div className="courseDetailLeft">*/}
                            {/*    <p className="courseHeaderLeft">Full Dynamic Website With Admin Panel</p>*/}
                            {/*    <p className="courseSubLeft">Total Lecture=30</p>*/}
                            {/*    <p className="courseSubLeft">Total Students=30</p>*/}
                            {/*</div>*/}
                            <div>
                                <p>Full Dynamic Website With Admin Panel</p>
                                <p>Total Lecture=30</p>
                                <p>Total Students=30</p>
                            </div>
                        </Col>
                        <Col lg={6} md={12} sm={12}>
                            {/*<div className="courseDetailRight">*/}
                            {/*    <p>I am a highly talented, experienced, professional and cooperative software engineer, I am working in programming and web world for more than 4 years .I assure you a wide range of quality IT services. Web development, mobile app development and UI design the major filed i am expert in. Moreover i have teaching passion. I makes video tutorial to share my knowledge. My over all skill makes me a complete software developer, so you can hire me for your projects </p>*/}
                            {/*</div>*/}
                            <div>
                                <p>I am a highly talented, experienced, professional and cooperative software engineer, I am working in programming and web world for more than 4 years .I assure you a wide range of quality IT services. Web development, mobile app development and UI design the major filed i am expert in. Moreover i have teaching passion. I makes video tutorial to share my knowledge. My over all skill makes me a complete software developer, so you can hire me for your projects </p>
                            </div>
                        </Col>
                    </Row>
                </Container>

                <Container style={{ marginTop:'6rem' }}>
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <h1 className="detailsHeader">Skill You Get</h1>
                            <p className="cardSubTitle"><FontAwesomeIcon className="checkIcon" icon={faCheckCircle} />Requirement Gather Requirement Gather</p>
                            <p className="cardSubTitle"><FontAwesomeIcon className="checkIcon" icon={faCheckCircle} />Requirement Gather</p>
                            <p className="cardSubTitle"><FontAwesomeIcon className="checkIcon" icon={faCheckCircle} />Requirement Gather</p>
                            <p className="cardSubTitle"><FontAwesomeIcon className="checkIcon" icon={faCheckCircle} />Requirement Gather</p>
                            <p className="cardSubTitle"><FontAwesomeIcon className="checkIcon" icon={faCheckCircle} />Requirement Gather</p>

                            <Button className="primary">Buy Now</Button>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <Player>
                                <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
                                <BigPlayButton position="center" />
                            </Player>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default CourseDetails;