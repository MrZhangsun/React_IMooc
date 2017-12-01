import React from "react";
import {Tabs} from "antd";
import MobileHeader from "./mobile_header";
import MobileFooter from "./moblie_footer";
const TabPane = Tabs.TabPane;

export default class MoblieIndex extends React.Component{
    render(){
        return(
            <div>
                <MobileHeader/>
                <Tabs activeKey={1}>
                    <TabPane key={1} tab={"头条"}/>
                    <TabPane key={2} tab={"国内"}/>
                    <TabPane key={3} tab={"国际"}/>
                    <TabPane key={4} tab={"社会"}/>
                    <TabPane key={5} tab={"娱乐"}/>
                    <TabPane key={6} tab={"科技"}/>
                    <TabPane key={7} tab={"时尚"}/>
                    <TabPane key={8} tab={"经济"}/>
                    <TabPane key={9} tab={"金融"}/>
                    <TabPane key={10} tab={"购物"}/>
                </Tabs>
                <MobileFooter/>
            </div>
        );
    };
}