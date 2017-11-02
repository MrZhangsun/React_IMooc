import React from 'react';
import {Row,Col} from 'antd';
import { Menu, Icon } from 'antd';
import 'antd/dist/antd.css';

export default class PCHeader extends React.Component{
    constructor(){
        super();
        this.state={
            current:'headLine'
        }
    }

    handleClick(even){
        this.setState={
            current:even.target.value
        }
    }

    render(){
        return(
            <header>
                <Row>
                    <Col span={2}></Col>
                    <Col span={4}>
                        <a href='/' className='logo'>
                            <img src='./src/images/logo.png' alt='logo'/>
                            <span>ReactNews</span>
                        </a>
                    </Col>
                    <Col span={16}>
                        <Menu
                            onClick={this.handleClick}
                            selectedKeys={[this.state.current]}
                            mode="horizontal"
                        >
                            <Menu.Item key="headLine"><Icon type="appstore" />头条</Menu.Item>
                            <Menu.Item key="social"><Icon type="appstore" />社会</Menu.Item>
                            <Menu.Item key="domestic"><Icon type="appstore" />国内</Menu.Item>
                            <Menu.Item key="international"><Icon type="appstore" />国际</Menu.Item>
                            <Menu.Item key="entertainment"><Icon type="appstore" />娱乐</Menu.Item>
                            <Menu.Item key="sports"><Icon type="appstore" />体育</Menu.Item>
                            <Menu.Item key="technology"><Icon type="appstore" />科技</Menu.Item>
                            <Menu.Item key="fashion"><Icon type="appstore" />时尚</Menu.Item>
                            <Menu.Item key="financial"><Icon type="appstore" />登录</Menu.Item>
                            <Menu.Item key="economic"><Icon type="appstore" />注册</Menu.Item>
                        </Menu>
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </header>
        );
    };
}
