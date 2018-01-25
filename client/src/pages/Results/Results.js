import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import API from "../../utils/API";
import Panel from "../../components/Panel";
import Article from "../../components/Article";

class Results extends Component {

    render() {
        return (
            <Panel title={"Top Articles"}>
                <Article title="Moody Bible Institute" author="JAX GORMAN" id="1"/>
                <Article title="Moody Global Ministries" author="LANE ANDERSON" id="2" />
                <Article title="Moody Radio" author="DREW SMITH" id="3" />
            </Panel>
        );
    }
}

export default Results;