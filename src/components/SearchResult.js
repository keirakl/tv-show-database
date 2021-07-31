import React from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import Image from 'react-bootstrap/Image';
import ShowInfoModal from "./ShowInfoModal";
import '../style.css';

class SearchResult extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showModal: false,
            showInfo: "",
        }
    }

    render() {
        const {results} = this.props;
        return (
            <Container className="" >
                {results ? 
                    (results.length > 0 ?
                        <Container>
                            <Row>
                                <h1>{`Top ${results.length} Results for "${this.props.searchTerm}"`}</h1>
                            </Row>
                            <Row>
                                <ListGroup variant="flush">
                                    {results.map((result, i) => {
                                        const show = result.show;
                                        return(
                                            <ListGroup.Item key={i} className="hover-cursor" onClick={() => this.setState({ showModal: true, showInfo: show })}>
                                                <Row>
                                                    <Col sm="auto">
                                                        <Image style={{maxWidth: 75}} src={show.image? show.image.medium : "https://upload.wikimedia.org/wikipedia/en/6/60/No_Picture.jpg"} fluid />
                                                    </Col>
                                                    <Col>
                                                        <h3 className="hover-text-color"  >{show.name}</h3>
                                                        {show.genres.length > 0? <p>Genres: {show.genres.map(genre => `${genre}, `)}...</p> : ""}
                                                        <p className="small-print">Click for more details</p>
                                                    </Col>
                                                </Row>
                                            </ListGroup.Item>
                                        );
                                    })}
                                </ListGroup>
                            </Row>
                            <Row>
                                <ShowInfoModal 
                                    showModal={this.state.showModal} 
                                    closeModal={() => this.setState({ showModal: false })}
                                    showInfo={this.state.showInfo}
                                    />
                            </Row>
                        </Container>
                        : <p>{`Cannot find a match for "${this.props.searchTerm}"`}</p>
                    )
                    : ""
                }
            </Container>
        )
    }
}

export default SearchResult;