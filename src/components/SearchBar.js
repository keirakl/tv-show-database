import React from "react";
import { Button, Container, InputGroup, FormControl, Navbar } from "react-bootstrap";
import './style.css';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }

    handleSearch = () => {
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

    render() {
        return (
          <Container className="d-flex m-25 flex-column vh-100">
            <Navbar>
              <Container>
                <Navbar.Brand href="#home">TV Show Database</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                  <InputGroup className="mb-3">
                    <FormControl
                      placeholder="Search TV shows by title... "
                      aria-label="title"
                      onChange={e => { this.searchTerm = e.target.value; }}
                    />
                    <Button variant="outline-secondary" onClick={()=> { this.handleSearch(); this.props.searchTerm(this.searchTerm) }}>Search</Button>
                  </InputGroup>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </Container>
        )
    }
}

export default SearchBar;