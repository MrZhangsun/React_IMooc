import React from "react";

export default class ValidationTools extends React.Component{
    /*登录信息校验*/
    validationForLogin(username, password) {
        if(username == "" || username || undefined){
            return false;
        }
        if(password == "" || password == undefined){
            return false;
        }
        return true;
    }
}