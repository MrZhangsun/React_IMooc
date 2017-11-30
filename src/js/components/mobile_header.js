import React from "react";
import Link from "react-router-dom";
import { Menu, Icon, Button, Form, Checkbox, Input, message, Tabs, Modal, Row, Col, Alert } from "antd";
const TabPane = Tabs.TabPane;
const FormItem = Form.Item;
import "antd/dist/antd.css";

class MobileHeader extends React.Component{
    constructor(){
        super();
        this.state = {
            current: "headLine",
            modelVisible: false,
            loginFailModalVisible: false,
            action: "login",
            hasLogined: false,
            nickName: "小红帽",
            alertMessage: "",
            alertTitle: "老子曰...：",
            alertType: "warning",
            userId: 0
        }
    }

    /*显示模态框*/
    showModal=()=>{
        this.setState({
            modelVisible: true
        });
    }

    /*关闭登录注册模态框*/
    handleCancel=(even)=>{
        this.setState({
            modelVisible: false,
        });
    }

    /*关闭登录失败模态框*/
    handleFailLoginCancel=(even)=>{
        this.setState({
            loginFailModalVisible: false,
        });
    }

    /*字符串非空校验*/
    isBlank=(value)=>{
        if(value == "" || value == undefined || value == null){
            return true;
        }
        return false;
    }

    /*字符串长度校验*/
    isLengthEnough=(val, min, max)=>{
        if(val.length >= min && val.length <= max){
            return true;
        }
        return false;
    }

    /*登录信息校验*/
    checkLoginInfo=(userName, password)=>{
        if(this.isBlank(userName)){
            return false;
        }
        if(this.isBlank(password)){
            return false;
        }
        return true;
    }

    /*注册信息校验*/
    checkRegisterInfo=(registerInfo)=>{
        if(this.isBlank(registerInfo.r_userName) || !this.isLengthEnough(registerInfo.r_userName, 6, 20)){
            return 1;
        }
        if(this.isBlank(registerInfo.r_password) || !this.isLengthEnough(registerInfo.r_password, 6,18)){
            return 2;
        }
        if(this.isBlank(registerInfo.r_confirmPassword) || !this.isLengthEnough(registerInfo.r_confirmPassword, 6, 18)){
            return 3;
        }
        if(registerInfo.r_password != registerInfo.password){
            return 4;
        }
        return 0;
    }

    /*用户登录*/
    userLogin=(even)=>{
        even.preventDefault();
        this.setState({
            action:"login"
        });
        let formData = this.props.form.getFieldsValue();
        // 用户名和密码校验
        if(!this.checkLoginInfo(formData.userName, formData.password)){
            this.setState({
                loginFailModalVisible: true,
                alertMessage:"亲爱哒，用户名或密码不正确！",
                alertTitle:"系统提示！",
                alertType:"warning",
            });
            return;
        }

        /*发起请求*/
        var fetchOptions={
            method:"GET",
            cache: 'default'
        };

        fetch("http://newsapi.gugujiankong.com/Handler.ashx" +
            "?action=" + this.state.action +
            "&username=" + formData.userName +
            "&password=" + formData.password +
            "&r_userName=" + formData.r_userName +
            "&r_password=" + formData.r_password +
            "&r_confirmPassword=" + formData.r_confirmPassword, fetchOptions)
            .then((response)=>{
                if(response.ok){
                    return response.json();
                }
            }).then((json)=>{
            if(json == null || json == undefined){
                message.error("用户名或密码错误")
                return;
            }
            message.success("登录成功！");
            this.setState({
                modelVisible: false,
                hasLogined:true,
            });
        }).catch((error)=>{
            console.log(error);
        });

    }

    /*用户注册*/
    userRegister=(even)=>{
        even.preventDefault();
        this.setState({
            action:"register"
        });
        let formData = this.props.form.getFieldsValue();
        // 注册数据校验
        let result = this.checkRegisterInfo(formData);
        if(result != 0){
            return false;
        }
        /*发起请求*/
        var fetchOptions={
            method:"GET",
            cache: 'default'
        };

        fetch("http://newsapi.gugujiankong.com/Handler.ashx" +
            "?action=" + this.state.action +
            "&username=" + formData.userName +
            "&password=" + formData.password +
            "&r_userName=" + formData.r_userName +
            "&r_password=" + formData.r_password +
            "&r_confirmPassword=" + formData.r_confirmPassword, fetchOptions)
            .then((response)=>{
                return response.json();
            }).then((json)=>{

        }).catch((error)=>{
            console.log(error);
        });
    };

    render(){
        const {getFieldDecorator} = this.props.form;

        const userShow = this.state.hasLogined ?
            <Icon type={"inbox"} style={{ fontSize:40, color: '#08c', paddingTop : 10, paddingBottom:10}}/>
            :
            <Icon type="appstore" style={{ fontSize:40, color: '#08c', paddingTop : 10, paddingBottom:10}} onClick={this.showModal.bind(this)} />;
        return(
            <div id={"mobileHeader"}>
                <header>
                    <Row>
                        <Col span={1}></Col>
                        <Col span={21}>
                            <a href="/" className="logo">
                                <img src="./src/images/logo.png" alt="logo"/>
                                <span>ReactNews</span>
                            </a>
                        </Col>
                        <Col span={1}>
                            {userShow}
                        </Col>
                        <Col span={1}></Col>
                    </Row>
                    {/*用户注册模态框*/}
                    <Modal
                        title="用户中心"
                        visible={this.state.modelVisible}
                        footer={null}
                        onCancel={this.handleCancel.bind(this)}>
                        {/*用户登录Tab*/}
                        <Tabs defaultActiveKey="1">
                            <TabPane tab={<span><Icon type="key" />登录</span>} key="1">
                                <Form onSubmit={this.userLogin.bind(this)} className="login-form">
                                    <FormItem>
                                        {getFieldDecorator('userName', {
                                            rules: [{ required: true, message: 'Please input your username!' }],
                                        })(
                                            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
                                        )}
                                    </FormItem>
                                    <FormItem>
                                        {getFieldDecorator('password', {
                                            rules: [{ required: true, message: 'Please input your Password!' }],
                                        })(
                                            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
                                        )}
                                    </FormItem>
                                    <FormItem>
                                        {getFieldDecorator('remember', {
                                            valuePropName: 'checked',
                                            initialValue: true,
                                        })(
                                            <Checkbox>Remember me</Checkbox>
                                        )}
                                        <a className="login-form-forgot" href="">Forgot password</a>
                                        <Button type="primary" htmlType="submit" style={{width: 488}}>
                                            Log in
                                        </Button>
                                        Or <a href="">register now!</a>
                                    </FormItem>
                                </Form>
                            </TabPane>

                            {/*用户注册Tab*/}
                            <TabPane tab={<span><Icon type="solution" />注册</span>} key="2">
                                <Form onSubmit={this.userRegister} className="register-form">
                                    <FormItem>
                                        {/*{getFieldDecorator("propertyName"，rules[{rule1},{rule2}])(React标签元素)}*/}
                                        {getFieldDecorator('r_userName', {
                                            rules: [{ required: true, message: 'Please input your username!' }],
                                        })(
                                            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
                                        )}
                                    </FormItem>
                                    <FormItem>
                                        {getFieldDecorator('r_password', {
                                            rules: [{ required: true, message: 'Please input your password!' }],
                                        })(
                                            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} placeholder="Password" />
                                        )}
                                    </FormItem>
                                    <FormItem>
                                        {getFieldDecorator('r_confirmPassword', {
                                            rules: [{ required: true, message: 'Please input your password again!' }],
                                        })(
                                            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} placeholder="ConfirmPassword" />
                                        )}
                                    </FormItem>

                                    <FormItem style={{ marginBottom: 8 }}>
                                        {getFieldDecorator('agreement', {
                                            valuePropName: 'checked',
                                        })(
                                            <Checkbox>I have read the <a href="">agreement</a></Checkbox>
                                        )}
                                        <Button type="primary" htmlType="submit" style={{width: 488}}>
                                            Register
                                        </Button>
                                    </FormItem>
                                </Form>
                            </TabPane>
                        </Tabs>
                    </Modal>
                </header>
            </div>
        );
    };
}

export default MobileHeader = Form.create({})(MobileHeader);