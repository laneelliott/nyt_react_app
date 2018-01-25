import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import API from "../../utils/API";
import { Input, Dropdown } from "../../components/Form";
import Panel from "../../components/Panel";

class Search extends Component {

    state = {
        search: '',
        results: '',
        start: '',
        end: ''
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
        console.log(this.state);
    };

    handleSearch = () => {
        console.log("search clicked");
        console.log(this.state.search);
    };

    render() {
        return (
            <Panel title={"Search Parameters"}>
                <div className="form">
                    <Input 
                        value={this.state.search}
                        onChange={this.handleInputChange}
                        name="search"
                        htmlFor="search"
                        title="Search Term:"
                        placeholder="puppies"
                    />
                    <Input
                        value={this.state.start}
                        onChange={this.handleInputChange}
                        name="start"
                        htmlFor="start"
                        title="Start Year: (Optional)"
                    />
                    <Input
                        value={this.state.end}
                        onChange={this.handleInputChange}
                        name="end"
                        htmlFor="end"
                        title="End Year: (Optional)"
                    />
                    <button type="submit" className="btn btn-default" id="run-search" onClick={this.handleSearch}><i className="fa fa-search"></i> Search</button>
                </div>
            </Panel>
        );
    }
}

export default Search;