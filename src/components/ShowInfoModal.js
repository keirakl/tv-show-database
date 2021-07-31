import React from "react";
import { Container, Row, Col, ListGroup, Modal } from "react-bootstrap";
import Image from 'react-bootstrap/Image';
import '../style.css';

const ShowInfoModal = (props) => {
    const show = props.showInfo;
    return (
        <Modal show={props.showModal} onHide={() => props.closeModal()} size="lg" >
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body>
                {show?
                    <Container>
                        <Row>
                            <h1>{show.name}</h1>
                        </Row>
                        <Row>
                            <Col sm="auto">
                                {show.image? <Image style={{maxWidth: 400}} src={show.image.original} fluid /> : "" }
                            </Col>
                            <Col>
                                <ListGroup variant="flush">
                                    {show.summary?
                                        <ListGroup.Item>
                                            {stripHTMLTags(show.summary)}
                                        </ListGroup.Item>
                                        : ""
                                    }
                                    {show.genres.length > 0?
                                        <ListGroup.Item>
                                            <p><b>Genres:</b> {show.genres.map(genre => `${genre}, `)}...</p>
                                        </ListGroup.Item>   
                                        : ""
                                    }
                                    {show.language?
                                        <ListGroup.Item>
                                            <p><b>Language:</b> {show.language}</p>
                                        </ListGroup.Item>  
                                        : ""
                                    }
                                    {show.officialSite?
                                        <ListGroup.Item>
                                            <p><b>Website:</b> <a href={show.officialSite} target="_blank" rel="noreferrer">{show.officialSite}</a></p>
                                        </ListGroup.Item>  
                                        : ""
                                    }
                                    {show.premiered?
                                        <ListGroup.Item>
                                            <p><b>Premiered on:</b> {show.premiered}</p>
                                        </ListGroup.Item>  
                                        : ""
                                    }
                                    {show.rating.average?
                                        <ListGroup.Item>
                                            <p><b>Rating:</b> {show.rating.average}/10</p>
                                        </ListGroup.Item>   
                                        : ""
                                    }
                                    {show.url?
                                        <ListGroup.Item>
                                            <a href={show.url} target="_blank" rel="noreferrer">Read more...</a>
                                        </ListGroup.Item>   
                                        : ""
                                    }
                                </ListGroup>
                            </Col>
                        </Row>
                    </Container> 
                    : <p>No data to show</p>
                }
                
            </Modal.Body>
        </Modal>
    )
}

const stripHTMLTags = (html) => {
    let doc = new DOMParser().parseFromString(html, 'text/html');
   return doc.body.textContent || "";
}


export default ShowInfoModal;