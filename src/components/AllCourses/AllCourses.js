import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import Course from "../../assets/images/course.jpg";
import {Link} from "react-router-dom";

class AllCourses extends Component {
    render() {
        return (
            <Fragment>
                <Container className="mt-5">
                    <Row>
                        <Col lg={6} md={12} sm={12} className="p-3">
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <img className="courseThumb" src={Course} alt="" />
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <h5 className="courseTitle">Course Title</h5>
                                    <p className="courseDesc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae culpa dolore repudiandae.</p>
                                    <Link to="/course-details" className="detailsButton">Details</Link>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={6} md={12} sm={12} className="p-3">
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <img className="courseThumb" src={Course} alt=""/>
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <h5 className="courseTitle">Course Title</h5>
                                    <p className="courseDesc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae culpa dolore repudiandae.</p>
                                    <Link to="/course-details" className="detailsButton">Details</Link>
                                </Col>
                            </Row>
                        </Col>

                        <Col lg={6} md={12} sm={12} className="p-3">
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <img className="courseThumb" src={Course} alt="" />
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <h5 className="courseTitle">Course Title</h5>
                                    <p className="courseDesc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae culpa dolore repudiandae.</p>
                                    <Link to="/course-details" className="detailsButton">Details</Link>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={6} md={12} sm={12} className="p-3">
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <img className="courseThumb" src={Course} alt=""/>
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <h5 className="courseTitle">Course Title</h5>
                                    <p className="courseDesc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae culpa dolore repudiandae.</p>
                                    <Link to="/course-details" className="detailsButton">Details</Link>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                </Container>
            </Fragment>
        );
    }
}

export default AllCourses;