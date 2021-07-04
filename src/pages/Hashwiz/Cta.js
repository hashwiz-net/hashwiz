import React, { Component } from 'react'
import { Col, Container, Form, Input, Row ,Button } from 'reactstrap';

import cta from '../../assets/images/crypto/bg.jpg';
import cta1 from '../../assets/images/crypto/cta.png';

export default class Cta extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="section pb-0" 
                    style={{ background: `url(${cta}) center ` }}
                    id="freequote"
                >
                    <div className="bg-overlay bg-primary bg-gradient" style={{ opacity : '0.7'}}></div>
                    <Container>
                        <Row className="justify-content-center">
                            <Col xs={12}>
                                <div className="section-title text-center mb-4 pb-2">
                                    <h4 className="title text-white title-dark mb-4">Get your free quote now.</h4>
                                    <p className="text-light para-dark para-desc mx-auto">Start working with Hashwiz to put your idea into design &amp; development.</p>
                                </div>
                                <div className="subcribe-form mt-4 text-center">
                                    <a href="mailto:info@hashwiz.net" className="btn btn-primary px-5 py-3 mb-2">Contact Us</a>
                                    {/* <Form>
                                        <div className="mb-2">
                                            <Input type="email" id="email" name="email" className="rounded-pill" placeholder="E-mail :" />
                                            <Button type="submit" className="btn btn-pills btn-primary">Subscribe</Button>
                                        </div>
                                    </Form> */}
                                </div>
                                <div className="mt-4 pt-2">
                                    <img src={cta1} className="img-fluid d-block mx-auto" style={{ opacity: 0 }} alt="" />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        )
    }
}
