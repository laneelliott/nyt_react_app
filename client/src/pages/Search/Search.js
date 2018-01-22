import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import { Input } from "../../components/Form";
import Panel from "../../components/Panel";

class Search extends Component {

    state = {
        searchTerm: ""
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
        console.log(this.state.searchTerm)
    };

    render() {
        return (
            <Panel title={"Search Parameters"}>
                <div className="form">
                    <Input 
                        label={"Search Term:"} 
                        htmlFor={"search"} 
                        id={"search-term"}
                        onChange={this.handleInputChange}
                        value={this.state.searchTerm}
                    />
                </div>
            </Panel>
        );
    }
}

export default Search;