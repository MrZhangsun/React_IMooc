import React from "react";
import {Tabs, Carousel} from "antd";
import MobileHeader from "./mobile_header";
import MobileFooter from "./moblie_footer";
import MobileList from "./mobile_list";
const TabPane = Tabs.TabPane;

export default class MoblieIndex extends React.Component{
    render(){
        const settings = {
            dots: true,
            autoplay:true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
        };
        return(
            <div>
                <MobileHeader/>
                <Tabs defaultActiveKey={"1"}>
                    <TabPane key={"1"} tab={"头条"}>
                        <div className={"carousel"}>
                            <Carousel {...settings}>
                                <div><img src="src/images/carousel_1.jpg" alt="image is missing"/></div>
                                <div><img src="src/images/carousel_2.jpg" alt="image is missing"/></div>
                                <div><img src="src/images/carousel_3.jpg" alt="image is missing"/></div>
                                <div><img src="src/images/carousel_4.jpg" alt="image is missing"/></div>
                            </Carousel>
                        </div>
                        <MobileList count={20} type={"top"}></MobileList>
                    </TabPane>
                    <TabPane key={"2"} tab={"国内"}>
                        <MobileList count={20} type={"guonei"}></MobileList>
                    </TabPane>
                    <TabPane key={"3"} tab={"国际"}>
                        <MobileList count={20} type={"guoji"}></MobileList>
                    </TabPane>
                    <TabPane key={"4"} tab={"社会"}>
                        <MobileList count={20} type={"shehui"}></MobileList>
                    </TabPane>
                    <TabPane key={"5"} tab={"娱乐"}>
                        <MobileList count={20} type={"yule"}></MobileList>
                    </TabPane>
                    <TabPane key={"6"} tab={"科技"}>
                        <MobileList count={20} type={"top"}></MobileList>
                    </TabPane>
                    <TabPane key={"7"} tab={"时尚"}>
                        <MobileList count={20} type={"keji"}></MobileList>
                    </TabPane>
                    <TabPane key={"8"} tab={"经济"}>
                        <MobileList count={20} type={"shishang"}></MobileList>
                    </TabPane>
                    <TabPane key={"9"} tab={"金融"}>
                        <MobileList count={20} type={"jingji"}></MobileList>
                    </TabPane>
                    <TabPane key={"10"} tab={"购物"}>
                        <MobileList count={20} type={"gouwu"}></MobileList>
                    </TabPane>
                </Tabs>
                <MobileFooter/>
            </div>
        );
    };
}