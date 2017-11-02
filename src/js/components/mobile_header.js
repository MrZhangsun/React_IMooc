import React from "react";
import {Row,Col} from "antd";
import "antd/dist/antd.css";

export default class MobileHeader extends React.Component{
    render(){
        return(
            <div id={"mobileHeader"}>
                <header>
                    <Row>
                        <Col span={2}></Col>
                        <Col span={4}>
                            <a href="/" className="logo">
                                <img src="./src/images/logo.png" alt="logo"/>
                                <span>ReactNews</span>
                            </a>
                        </Col>
                        <Col span={2}></Col>
                    </Row>
                </header>
            </div>
        );
    };
}