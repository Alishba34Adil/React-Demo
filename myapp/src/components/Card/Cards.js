import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <Container>
                <Row className='row-cards'>
                    <Col md={3}>
                        <Card style={{ width: '16rem' }}>
                            <Card.Img variant="top" src="https://reliasoftware.com/static/bf83ec34039c00945c0c7a989792e063/ultimate-guide-to-offshore-outsourcing-software-development-2021.jpg" />
                            <Card.Body>
                                <Card.Title>Advertisement </Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">LEARN MORE</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3}>

                        <Card style={{ width: '16rem' }}>
                            <Card.Img variant="top" src="https://media.istockphoto.com/id/1346698461/photo/agile-software-development-with-developer-using-kanban-board-framework-methodology-on.jpg?s=170667a&w=0&k=20&c=xNwfr-xbzRtwFZNSibxaR867GNpGQStNy9nUw_7hQQw=" />
                            <Card.Body>
                                <Card.Title>Advertisement </Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">LEARN MORE</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3}>

                        <Card style={{ width: '16rem' }}>
                            <Card.Img variant="top" src="https://static.vecteezy.com/system/resources/thumbnails/000/695/795/small/software-development-and-coding-landing-page.jpg" />
                            <Card.Body>
                                <Card.Title>Advertisement </Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">LEARN MORE</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={3}>

                        <Card style={{ width: '16rem' }}>
                            <Card.Img variant="top" src="https://static.vecteezy.com/system/resources/thumbnails/008/149/102/small/web-development-software-coding-and-programming-on-application-in-laptop-computer-devices-with-script-language-testing-and-graphical-icons-vector.jpg" />
                            <Card.Body>
                                <Card.Title>Advertisement </Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">LEARN MORE</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default Cards