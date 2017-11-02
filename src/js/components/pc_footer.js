import React from "react";
import {Row,Col} from "antd";
import "antd/dist/antd.css";

export default class PCFooter extends React.Component{
    render(){
        return(
            <footer className={"footer"}>
                <Row>
                    <Col span={2}></Col>
                    <Col span={20}>
                        <p>&copy;&nbsp;2017-2050 ReactNews CopyRight Reserved.</p>
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </footer>
        );
    };
}
