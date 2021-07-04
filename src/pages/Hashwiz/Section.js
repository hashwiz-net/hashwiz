import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';

import bg from '../../assets/images/crypto/bg.jpg';

export default class Section extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="bg-home d-flex align-items-center"
                style={{ background: `url(${bg}) top ` }}
                >
            <Container>
                <Row className="justify-content-center">
                    <Col xs={12}>
                        <div className="title-heading text-center">
                            <h4 className="heading fw-bold text-white title-dark mb-3">Get your ideas developed and running<br /> on the blockchain</h4>
                            <h5 className="para-desc mx-auto text-light title-dark">Get your free quote today.</h5>
                            <div className="mt-4 pt-2">
                                <a href="mailto:info@hashwiz.net" className="btn btn-primary">Contact Us</a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
            </React.Fragment>
        )
    }
}
