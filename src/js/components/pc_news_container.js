import React from "react";
import {Row, Col, Carousel, Tabs} from "antd";
import PCNewsBlock from "./pc_news_block";

const TabPane = Tabs.TabPane;

export default class PCNewsContainer extends React.Component {
    render() {
        const settings = {
            dots: true,
            autoplay:true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
        };
        return (
            <div>
                <Row>
                    <Col span={2}></Col>
                    <Col span={20}>
                        <div className={"leftContainer"}>
                            <div className={"carousel"}>
                                <Carousel {...settings}>
                                    <div><img src="src/images/carousel_1.jpg" alt="image is missing"/></div>
                                    <div><img src="src/images/carousel_2.jpg" alt="image is missing"/></div>
                                    <div><img src="src/images/carousel_3.jpg" alt="image is missing"/></div>
                                    <div><img src="src/images/carousel_4.jpg" alt="image is missing"/></div>
                                </Carousel>
                            </div>
                        </div>
                        <Tabs defaultActiveKey={"1"} className={"tabs_news"}>
                            <TabPane tab={"头条"} width={"100%"} key={"1"}>
                                <PCNewsBlock count={22} type={"top"}/>
                            </TabPane>
                            <TabPane tab={"国际"} width={"100%"} key={"2"}>
                                <PCNewsBlock count={22} type={"guoji"}/>
                            </TabPane>
                            <TabPane tab={"娱乐"} width={"100%"} key={"3"}>
                                <PCNewsBlock count={22} type={"yule"}/>
                            </TabPane>
                            <TabPane tab={"科技"} width={"100%"} key={"4"}>
                                <PCNewsBlock count={22} type={"keji"}/>
                            </TabPane>
                            <TabPane tab={"军事"} width={"100%"} key={"6"}>
                                <PCNewsBlock count={22} type={"junshi"}/>
                            </TabPane>
                        </Tabs>
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </div>
        );
    };
}