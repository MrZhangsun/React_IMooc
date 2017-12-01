import React from "react";
import {Card} from "antd";

export default class PCNewsBlock extends React.Component {

    constructor() {
        super();
        this.state={
            news:""
        }
    }

    /*加载新闻列表*/
    componentWillMount=()=>{
        var fetchOptions = {
            method:"GET"
        };

        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type="+ this.props.type +"&count="+ this.props.count, fetchOptions)
            .then(response => response.json())
            .then(json => {
                this.setState({
                    news:json
                })
            });
    };

    render() {
        const {news} = this.state;
        const newsList = news.length > 0
        ? news.map((newsItem, index) => (
                <li key={index}>
                    <a href={newsItem.url} target="_blank">
                        {newsItem.title}
                    </a>
                </li>
            ))
        : '没有加载到任何新闻';

        return (
            <div className={"topNewsList"}>
                <Card>
                    <ul className={"newsList"}>
                        {newsList}
                    </ul>
                </Card>
            </div>
        );
    };
}