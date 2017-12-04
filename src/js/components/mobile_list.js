import React from "react";
import {Row, Col} from "antd";

export default class MobileList extends React.Component{
    constructor(){
        super();
        this.state={
            news : ""
        }
    }

    componentWillMount=()=>{
        var fetchOptions = {
            method:"GET"
        }
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?type="+this.props.type+"&count="+this.props.count+"&action=getnews", fetchOptions).then(response => response.json()).then(json=>{
           if(json != null && json != undefined){
               this.setState({
                   news : json
               });
           }
        });
    }

    render(){
        const {news} = this.state;
        const imageList = news.length > 0
            ? news.map((items, index) =>(
                <section key={index} className={"m_article list-item special_section clearfix"}>
                    <a href={items.url}>
                        <div className={"m_article_img"}>
                            <img src={items.thumbnail_pic_s} alt={items.title}></img>
                        </div>
                        <div className={"m_article_info"}>
                            <div className={"m_article_title"}>
                                <span>{items.title}</span>
                            </div>
                            <div className={"m_article_desc clearfix"}>
                                <div className={"m_article_desc_l"}>
                                    <span className={"m_article_desc_channel"}>{items.realtype}</span>
                                    <span className={"m_article_desc_time"}>{items.date}</span>
                                </div>
                            </div>
                        </div>
                    </a>
                </section>
            ))
            :"没有加载到任何信息";
        return(
            <div>
                <Row>
                    <Col span={1}/>
                    <Col span={22}>
                        {imageList}
                    </Col>
                    <Col span={1}/>
                </Row>
            </div>
        );
    }
}
