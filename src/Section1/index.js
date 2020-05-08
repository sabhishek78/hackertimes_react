import React from "react";
// import "./styles1.css";
import NewsCard from "../NewsCard1";
import NewsCard2 from "../NewsCard2";


class Section1 extends React.Component {
    render() {
        return (
            <div className="row1">
                <div id="left-col">
                    {this.props.stories[0]!==undefined&&<NewsCard newsItem={this.props.stories[0]}/>}
                </div>
                <div id="middle-col">
                    {this.props.stories[1]!==undefined&&<NewsCard2 newsItem={this.props.stories[1]}/>}
                    {this.props.stories[2]!==undefined&&<NewsCard2 newsItem={this.props.stories[2]}/>}
                </div>
                <div id="right-col">
                    {this.props.stories[3]!==undefined&&<NewsCard2 newsItem={this.props.stories[3]}/>}
                    {this.props.stories[4]!==undefined&&<NewsCard2 newsItem={this.props.stories[4]}/>}
                </div>
            </div>
        );
    }
}

export default Section1;