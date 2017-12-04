import React from "react";
import {Row, Col} from "antd";

export default class PCNewsDetails extends React.Component{

    constructor(){
        super();
        this.state={
            news:""
        }
    }

    /*查询详情(生命周期)*/
    componentDidMount=()=>{
        fetchOptions={
            method:"GET"
        }

        fetch("http://newsapi.gugujiankong.com/Handler.ashx?uniquekey="+this.props.param.uniquekey+"&action=getnewsitem", fetchOptions).then(response=>response.json()).then(json=>{
            if(json != null && json != undefined) {
                this.setState({news : json});
                document.title = news.title + "- React News | 浅草新闻-最新的情报助手";}});
    }

    createMarkUp=()=>{
        return{
            __html:news.pagecontent
        };
    }

    render(){
        const {news} = this.state;
        const details = news
        ?"": "";
        return(
            <div>
                <Row>
                    <Col span={2}></Col>
                    <Col span={14}>
                        {/*dangerouslySetInnerHTML:项指定的标签中安全的插入标签*/}
                        <div className={"articleContainer"} dangerouslySetInnerHTML={this.createMarkUp()}></div>
                    </Col>
                    <Col span={6}></Col>
                    <Col span={2}></Col>
                </Row>
            </div>
        );
    }
}