import React from "react";
import { Col, Container, Row } from "../Grid";

const Panel = ({ title, children }) => 
    <Container>
        <Row>
            <Col size="md-12">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3 className="panel-title">{title}</h3>
                    </div>
                    <div className="panel-body">
                        {children}
                    </div>
                </div>
            </Col>
        </Row>
    </Container>;

export default Panel;