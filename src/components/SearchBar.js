import React from "react";
import { Button, Container, InputGroup, FormControl, Col, Row } from "react-bootstrap";
import '../style.css';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };

        this.onEnter = this.onEnter.bind(this);
    }

    handleSearch = () => {
        this.props.searchTerm(this.searchTerm); 
        let url = `https://api.tvmaze.com/search/shows?q=${this.searchTerm}`;

        fetch(url, {
          "method": "GET",
        }).then(response => { 
            if(response.ok) {
                response.json().then(jsonData => {
                    this.props.data(jsonData);
                })
            } else {
                alert("Error! Cannot retrieve data from TVMaze API");
            }
        }).catch(err => {
            alert("Error! Cannot make Fetch request!");
            console.error(err);
        });
    }

    onEnter = ( e ) => {
      if (e.charCode === 13) {
        this.searchTerm = e.target.value;
        this.handleSearch();
      }
    }

    render() {
        return (
          <Container className="d-flex flex-column search-bar my-3">
            <Row className="justify-content-center my-2">
              <Col md="auto">
                <h1 className="nav-brand">TV Show Database</h1>
              </Col>
            </Row>
            <Row>
              <Col>
                <InputGroup className="mb-3">
                  <FormControl
                    placeholder="Search TV shows by title... "
                    aria-label="title"
                    onChange={e => { this.searchTerm = e.target.value; }}
                    onKeyPress={this.onEnter}
                  />
                  <Button variant="outline-secondary" onClick={()=> this.handleSearch() }>Search</Button>
                </InputGroup>
              </Col>
            </Row>
          </Container>
        )
    }
}

export default SearchBar;