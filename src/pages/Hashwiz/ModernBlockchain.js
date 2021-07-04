import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';

//Import Components
import SectionTitle from "../../components/Shared/SectionTitle";

export default class ModernBlockchain extends Component {
    render() {
        return (
            <React.Fragment>
                <Container>
                    <SectionTitle
                        title="What we do?"
                        desc="We provide a wide range of high quality services to cater to any and all the needs of our clients and help them build build their dream project on the blockchain"
                    />

                    <Row className="justify-content-center">
                        <Col lg={4} md={6} className="mt-4 pt-2">
                            <Card className="border-0 features feature-clean course-feature p-4 overflow-hidden shadow text-center">
                                {/* <div className="icons text-primary text-center mx-auto">
                                    <i className="uil uil-file-contract-dollar d-block rounded h3 mb-0"></i>
                                </div> */}
                                <CardBody className="p-0 mt-4">
                                    <Link to="#" className="title h5 text-dark">Smart Contract Development</Link>
                                    <p className="text-muted mt-2">Develop &amp; deploy your business logic to a smart contract on any blockchain.</p>
                                    {/* <Link to="#" className="text-primary read-more">Read More <i className="uil uil-angle-right-b"></i></Link> */}
                                    {/* <i className="uil uil-file-contract-dollar text-primary full-img"></i> */}
                                </CardBody>
                            </Card>
                        </Col>

                        <Col lg={4} md={6} className="mt-4 pt-2">
                            <Card className="border-0 features feature-clean course-feature p-4 overflow-hidden shadow text-center">
                                {/* <div className="icons text-primary text-center mx-auto">
                                    <i className="uil uil-lock-alt d-block rounded h3 mb-0"></i>
                                </div> */}
                                <CardBody className="p-0 mt-4">
                                    <Link to="#" className="title h5 text-dark">dApp Development</Link>
                                    <p className="text-muted mt-2">Develop your enterprise-grade decentralized applications (dApp).</p>
                                    {/* <Link to="#" className="text-primary read-more">Read More <i className="uil uil-angle-right-b"></i></Link> */}
                                    {/* <i className="uil uil-lock-alt text-primary full-img"></i> */}
                                </CardBody>
                            </Card>
                        </Col>

                        <Col lg={4} md={6} className="mt-4 pt-2">
                            <Card className="border-0 features feature-clean course-feature p-4 overflow-hidden shadow text-center">
                                {/* <div className="icons text-primary text-center mx-auto">
                                    <i className="uil uil-analytics d-block rounded h3 mb-0"></i>
                                </div> */}
                                <CardBody className="p-0 mt-4">
                                    <Link to="#" className="title h5 text-dark">Smart Contract Audit</Link>
                                    <p className="text-muted mt-2">Get a complete security audit of your smart contracts to help prevent hacks.</p>
                                    {/* <Link to="#" className="text-primary read-more">Read More <i className="uil uil-angle-right-b"></i></Link> */}
                                    {/* <i className="uil uil-analytics text-primary full-img"></i> */}
                                </CardBody>
                            </Card>
                        </Col>

                        <Col lg={4} md={6} className="mt-4 pt-2">
                            <Card className="border-0 features feature-clean course-feature p-4 overflow-hidden shadow text-center">
                                {/* <div className="icons text-primary text-center mx-auto">
                                    <i className="uil uil-dashboard d-block rounded h3 mb-0"></i>
                                </div> */}
                                <CardBody className="p-0 mt-4">
                                    <Link to="#" className="title h5 text-dark">Private Blockchain Development</Link>
                                    <p className="text-muted mt-2">Want your own private blockchain running? We got you covered too.</p>
                                    {/* <Link to="#" className="text-primary read-more">Read More <i className="uil uil-angle-right-b"></i></Link> */}
                                    {/* <i className="uil uil-dashboard text-primary full-img"></i> */}
                                </CardBody>
                            </Card>
                        </Col>

                        <Col lg={4} md={6} className="mt-4 pt-2">
                            <Card className="border-0 features feature-clean course-feature p-4 overflow-hidden shadow text-center">
                                {/* <div className="icons text-primary text-center mx-auto">
                                    <i className="uil uil-swatchbook d-block rounded h3 mb-0"></i>
                                </div> */}
                                <CardBody className="p-0 mt-4">
                                    <Link to="#" className="title h5 text-dark">Launch your token</Link>
                                    <p className="text-muted mt-2">Deploy and launch your own cryptocurrency token to the blockchain.</p>
                                    {/* <Link to="#" className="text-primary read-more">Read More <i className="uil uil-angle-right-b"></i></Link> */}
                                    {/* <i className="uil uil-swatchbook text-primary full-img"></i> */}
                                </CardBody>
                            </Card>
                        </Col>

                        <Col lg={4} md={6} className="mt-4 pt-2">
                            <Card className="border-0 features feature-clean course-feature p-4 overflow-hidden shadow text-center">
                                {/* <div className="icons text-primary text-center mx-auto">
                                    <i className="uil uil-exchange d-block rounded h3 mb-0"></i>
                                </div> */}
                                <CardBody className="p-0 mt-4">
                                    <Link to="#" className="title h5 text-dark">Optimize Smart Contracts</Link>
                                    <p className="text-muted mt-2">Reduce the gas costs of your smart contracts functions by optimizing it.</p>
                                    {/* <Link to="#" className="text-primary read-more">Read More <i className="uil uil-angle-right-b"></i></Link> */}
                                    {/* <i className="uil uil-exchange text-primary full-img"></i> */}
                                </CardBody>
                            </Card>
                        </Col>

                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}
