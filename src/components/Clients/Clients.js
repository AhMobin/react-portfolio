import React, {Component, Fragment} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import New from "../../assets/images/new.jpg"
import {Col, Container, Row} from "react-bootstrap";

class Clients extends Component {
    render() {

        var settings = {
            dots: true,
            infinite: true,
            speed: 3000,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay:true,
            autoplaySpeed: 3000,
            vertical:true,
            verticalSwiping:true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };

        return (
            <Fragment>
                <Container style={{marginBottom:'60px'}}>
                    <h1 className="contentTitle">Client Says</h1>
                    <Slider {...settings}>
                        <Row className="text-center">
                            <Col>
                                <img className="reviewImage" src={New} alt=""/>
                                <h1 className="reviewTitle">Web Development</h1>
                                <p className="reviewDesc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, hic?</p>
                            </Col>
                        </Row>

                        <Row className="text-center">
                            <Col>
                                <img className="reviewImage" src={New} alt=""/>
                                <h1 className="reviewTitle">Web Development</h1>
                                <p className="reviewDesc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, hic?</p>
                            </Col>
                        </Row>

                        <Row className="text-center">
                            <Col>
                                <img className="reviewImage" src={New} alt=""/>
                                <h1 className="reviewTitle">Web Development</h1>
                                <p className="reviewDesc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, hic?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, hic?</p>
                            </Col>
                        </Row>
                    </Slider>
                </Container>
            </Fragment>
        );
    }
}

export default Clients;