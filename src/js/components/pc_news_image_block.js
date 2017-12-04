import React from "react";
import {Card} from "antd";

export default class PCNewsImageBlock extends React.Component {

    constructor(){
        super();
        this.state={
            news:""
        }
    }

    componentWillMount=()=>{
        var fetchOptions = {
            method : "GET"
        }
        fetch("http://newsapi.gugujiankong.com/Handler.ashx" +
            "?action=getnews&type=" + this.props.type + "&count=" + this.props.count, fetchOptions)
            .then(response => response.json())
            .then(json => {
                if(json != null && json != undefined) {
                    this.setState({
                        news : json
                    });
                }
            });
    }

    render(){
        const styleImage = {
            display:"block",
            width:this.props.imageWidth,
            height:"90px"
        };

        const styleH3 = {
            width:this.props.imageWidth,
            whiteSpace:"nowrap",
            overflow:"hidden",
            textOverflow:"ellipsis"
        };

        const {news}=this.state;
        const newsImage=news.length > 0
            ? news.map((newsItem, index)=>(
                <div className={"imageblock"}>
                    <a href={newsItem.url}>
                        <div className={"custom-image"}>
                            <img style={styleImage} alt={newsItem.author_name} src={newsItem.thumbnail_pic_s03}/>
                        </div>
                        <div className={"custom-card"}>
                            <h3 style={styleH3}>{newsItem.title}</h3>
                            <p>{newsItem.author_name}</p>
                        </div>
                    </a>
                </div>
            ))
            :"没有获取到相关信息";
        return(
            <Card title={this.props.cartTitle} bordered={true} style={{
                width: this.props.width
            }}>
                {newsImage}
            </Card>
        );
    };
}