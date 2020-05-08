import React from "react";
// import "./styles1.css";
import NewsCard from "../NewsCard1";
import NewsCard2 from "../NewsCard2";


class Section2 extends React.Component {
    render() {
        return (
            <div className="row2">
                <div id="middle-col">
                    {this.props.stories[0]!==undefined&&<NewsCard2 newsItem={this.props.stories[0]}/>}
                    {this.props.stories[1]!==undefined&&<NewsCard2 newsItem={this.props.stories[1]}/>}
                </div>
                <div id="middle-col">
                    {this.props.stories[2]!==undefined&&<NewsCard2 newsItem={this.props.stories[2]}/>}
                    {this.props.stories[3]!==undefined&&<NewsCard2 newsItem={this.props.stories[3]}/>}
                </div>
                <div id="middle-col">
                    {this.props.stories[4]!==undefined&&<NewsCard2 newsItem={this.props.stories[4]}/>}
                    {this.props.stories[5]!==undefined&&<NewsCard2 newsItem={this.props.stories[5]}/>}
                </div>
                <div id="middle-col">
                    {this.props.stories[6]!==undefined&&<NewsCard2 newsItem={this.props.stories[6]}/>}
                    {this.props.stories[7]!==undefined&&<NewsCard2 newsItem={this.props.stories[7]}/>}
                </div>
            </div>
        );
    }
}

export default Section2;