import React from "react";
import { Menu, Icon, Button, Form, Checkbox, Input, message, Tabs, Modal, Row, Col, Alert } from "antd";
const TabPane = Tabs.TabPane;
const FormItem = Form.Item;
import "antd/dist/antd.css";

export default class MobileHeader extends React.Component{
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
            modelVisible: true,
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
                message.error("用户名或密码不能为空")
                return;
            }
            message.success("登录成功！");
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
        const userShow = this.state.hasLogined ?
            <Link>
                <Icon type={"inbox"}/>
            </Link>
            :
            <Icon type={"settings"} onClick={this.showModal.bind(this)}/>;
        return(
            <div id={"mobileHeader"}>
                <header>
                    <Row>
                        <Col span={1}></Col>
                        <Col span={22}>
                            <a href="/" className="logo">
                                <img src="./src/images/logo.png" alt="logo"/>
                                <span>ReactNews</span>
                            </a>
                            {userShow}
                        </Col>
                        <Col span={1}></Col>
                    </Row>
                </header>
            </div>
        );
    };
}