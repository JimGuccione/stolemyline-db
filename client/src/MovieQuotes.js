import React from "react";
import {Row, Col, Table} from "reactstrap";

const MovieQuotes = (props) => {
    const{data} = props;

    if (!data)
        return<div></div>;

    return(
        <Row className="MovieQuotes">
            <Col sm="12" md= {{ size: 4, offset: 4 }}>
                <h2>What!</h2>
                <img/>
                <span></span>
                <span></span>
                <Table>
                    <tbody></tbody>
                </Table>
            </Col>
        </Row>
        );
    };
    export default MovieQuotes;