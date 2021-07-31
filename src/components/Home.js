import React from "react";
import { Container } from "react-bootstrap";
import SearchBar from "./SearchBar";
import SearchResult from "./SearchResult";

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          data: "",
          searchTerm: "",
        }
    }

    render() {
      console.log(this.state.data);
        return (
          <Container className="d-flex m-25 flex-column vh-100">
            <SearchBar data={(data) => this.setState({data})} searchTerm={(searchTerm) => this.setState({searchTerm})}/>
            <SearchResult results={this.state.data} searchTerm={this.state.searchTerm}/>
          </Container>
        )
    }
}

export default Home;