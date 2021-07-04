import React, { Component } from 'react'

//import images
import crypto1 from '../../assets/images/crypto/lapy01.png';
import crypto2 from '../../assets/images/crypto/iphone.png';
import { Col, Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom';

import SectionTitle from "../../components/Shared/SectionTitle";

export default class Team extends Component {
    render() {
        return (
            <React.Fragment>
                <Container className="">
                    <SectionTitle
                        title="Portfolio"
                        desc="Have a look at products that we have built"
                    />

                    <Row className="align-items-center">
                        <Col lg={6} md={6}>
                            <img src={crypto1} className="img-fluid" alt="" />
                        </Col>

                        <Col lg={6} md={6} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                            <div className="section-title ms-lg-5">
                                <h4 className="title mb-4">Telegram Unlock Bot</h4>
                                <p className="text-muted">A bot built on top of Unlock Protocol to monetize and restrict access to your Telegram channels.</p>
                                <ul className="list-unstyled text-muted">
                                    <li className="mb-0"><span className="text-primary h5 me-2"><i className="uil uil-check-circle align-middle"></i></span>Built on top of Unlock Protocol</li>
                                    <li className="mb-0"><span className="text-primary h5 me-2"><i className="uil uil-check-circle align-middle"></i></span>Easier to setup and use on any Telegram channel</li>
                                    <li className="mb-0"><span className="text-primary h5 me-2"><i className="uil uil-check-circle align-middle"></i></span>Works on both Rinkeby and Mainnet</li>
                                </ul>
                                <Link to="#" className="mt-3 h6 text-primary">Find Out More <i className="uil uil-angle-right-b"></i></Link>
                            </div>
                        </Col>
                    </Row>
                </Container>

                {/* <Container className="mt-100 mt-60">
                    <Row className="align-items-center">
                        <Col lg={7} md={6} className="order-2 order-md-1 mt-4 mt-sm-0 pt-2 pt-sm-0">
                            <div className="section-title me-lg-5">
                                <h4 className="title mb-4">Smart Tools for Finance Teams</h4>
                                <p className="text-muted">This prevents repetitive patterns from impairing the overall visual impression and facilitates the comparison of different typefaces. Furthermore, it is advantageous when the dummy text is relatively realistic.</p>
                                <ul className="list-unstyled text-muted">
                                    <li className="mb-0"><span className="text-primary h5 me-2"><i className="uil uil-check-circle align-middle"></i></span>Digital Marketing Solutions for Tomorrow</li>
                                    <li className="mb-0"><span className="text-primary h5 me-2"><i className="uil uil-check-circle align-middle"></i></span>Create your own skin to match your brand</li>
                                </ul>
                                <Link to="#" className="mt-3 h6 text-primary">Find Out More <i className="uil uil-angle-right-b"></i></Link>
                            </div>
                        </Col>

                        <Col lg={5} md={6} className="order-1 order-md-2">
                            <img src={crypto2} className="img-fluid" alt="" />
                        </Col>
                    </Row>
                </Container> */}
            </React.Fragment>
        )
    }
}
