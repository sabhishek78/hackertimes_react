import React from "react";
// import "./styles1.css";
import PopularNewsCard from "../PopularNewsCard";
import NewsCard2 from "../NewsCard2";


class Section1 extends React.Component {
    render() {
        return (
            <div className="section1">
                <div id="section1col1">
                    {this.props.stories[0]!==undefined&&<PopularNewsCard newsItem={this.props.stories[0]}/>}
                </div>
                <div id="section1col2">
                    {this.props.stories[1]!==undefined&&<PopularNewsCard newsItem={this.props.stories[1]}/>}
                    {this.props.stories[2]!==undefined&&<NewsCard2 newsItem={this.props.stories[2]}/>}
                </div>
                <div id="section1col2">
                    {this.props.stories[3]!==undefined&&<PopularNewsCard newsItem={this.props.stories[3]}/>}
                    {this.props.stories[4]!==undefined&&<NewsCard2 newsItem={this.props.stories[4]}/>}
                </div>
            </div>
        );
    }
}

export default Section1;