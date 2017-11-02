import React from "react";
import { Menu, Icon, Button, Form, Checkbox, Input, message, Tabs, Modal, Row, Col } from "antd";
const TabPane = Tabs.TabPane;

class PCHeader extends React.Component{
    constructor() {
        super();
        this.state = {
            current: "headLine",
            modelVisible: false,
            action: "login",
            hasLogined: false,
            nickName:"小红帽",
            userId:0
        }
    }

    /*显示模态框*/
    showModal(){
        this.setState({
            modelVisible: true,
        });
    }

    /*关闭模态框*/
    handleCancel(even){
        this.setState({
            modelVisible: false,
        });
    }


    render(){
        // 注册/登录
        const userShow=this.state.hasLogined
        ?
            <Menu.Item key={"logout"} className={"register"}>
                <Button type={"ghost"} htmlType={"button"}>{this.state.nickName}</Button>
                &nbsp;&nbsp;
                <Button type={"ghost"} htmlType={"button"}>个人中心</Button>
                &nbsp;&nbsp;
                <Button type={"ghost"} htmlType={"button"}>退出</Button>
                &nbsp;&nbsp;
            </Menu.Item>
        :
            <Menu.Item key={"register"} className={"register"}>
                <Button type="primary" onClick={this.showModal.bind(this)}>登录/注册</Button>
            </Menu.Item>;

        return(
            <header>

                <Row>
                    <Col span={2}></Col>
                    <Col span={4}>
                        <a href="/" className="logo">
                            <img src="./src/images/logo.png" alt="logo"/>
                            <span>ReactNews</span>
                        </a>
                    </Col>
                    <Col span={16}>
                        <Menu
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
                            {userShow}
                        </Menu>
                    </Col>
                    <Col span={2}></Col>
                </Row>

                {/*注册登录模态框*/}
                <Modal
                    title="用户中心"
                    visible={this.state.modelVisible}
                    footer={null}
                    onCancel={this.handleCancel.bind(this)}>
                    <Tabs defaultActiveKey="1">
                        <TabPane tab={<span><Icon type="key" />登录</span>} key="1">
                            <Input.Group size={"large"}>
                                <Input placeholder="Enter your Name" prefix={<Icon type="user" />} style={{ marginBottom: 15}}/>
                                <Input placeholder="Enter your Passwrd" prefix={<Icon type="key" />} style={{ marginBottom: 15}}/>
                            </Input.Group>
                            <Button type="primary">登录</Button>
                        </TabPane>
                        <TabPane tab={<span><Icon type="solution" />注册</span>} key="2">
                            <Input.Group size={"large"}>
                                <Input placeholder="请输入用户名" style={{ marginBottom: 15}} />
                                <Input placeholder="请输入密码" style={{ marginBottom: 15}} />
                                <Input placeholder="请输入确认密码" style={{ marginBottom: 15}} />
                            </Input.Group>
                            <Button type="primary">注册</Button>
                        </TabPane>
                    </Tabs>
                </Modal>
            </header>
        );
    };
}

export default PCHeader = Form.create({})(PCHeader);