import React from "react";
// import "./styles1.css";
import NewsCard from "../NewsCard1";
import NewsCard2 from "../NewsCard2";


class Section3 extends React.Component {
    render() {
        return (
            <div className="row4">
                {this.props.stories[0]!==undefined&&<NewsCard2 newsItem={this.props.stories[0]}/>}
                {this.props.stories[1]!==undefined&&<NewsCard2 newsItem={this.props.stories[1]}/>}
            </div>
        );
    }
}

export default Section3;