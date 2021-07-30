import React from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import Image from 'react-bootstrap/Image';
import ShowInfoModal from "./ShowInfoModal";
import './style.css';

class SearchResult extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showModal: false,
            showInfo: "",
        }
    }

    renderShowModal = () => {
        return <ShowInfoModal 
            showModal={this.state.showModal} 
            closeModal={() => this.setState({ showModal: false })}
            showInfo={this.state.showInfo}
            />
    }
    
    render() {
        const results = this.props.data;
        console.log(results);
        return (
            <Container className="" >
                {results ? 
                    <Container>
                        <Row>
                            <h1>{`Top ${results.length} Results for "${this.props.searchTerm}"`}</h1>
                        </Row>
                        <Row>
                            <ListGroup variant="flush">
                                {results.map((result, i) => {
                                    const show = result.show;
                                    console.log(show.image);
                                    return(
                                        <ListGroup.Item key={i}>
                                            <Row>
                                                <Col sm="auto">
                                                    <Image className="hover-cursor" style={{maxWidth: 75}} src={show.image? show.image.medium : "https://upload.wikimedia.org/wikipedia/en/6/60/No_Picture.jpg"} onClick={() => this.setState({ showModal: true, showInfo: show })} fluid />
                                                </Col>
                                                <Col>
                                                    <h3 className="hover-cursor hover-text-color"  onClick={() => this.setState({ showModal: true, showInfo: show })}>{show.name}</h3>
                                                    {show.genres.length > 0? <p>Genres: {show.genres.map(genre => `${genre}, `)}...</p> : ""}
                                                    <a className="hover-cursor"  onClick={() => this.setState({ showModal: true, showInfo: show })}>More details</a>
                                                </Col>
                                            </Row>
                                        </ListGroup.Item>
                                    );
                                })}
                            </ListGroup>
                        </Row>
                        <Row>{this.renderShowModal()}</Row>
                    </Container>
                    : "" }
            </Container>
        )
    }
}

export default SearchResult;