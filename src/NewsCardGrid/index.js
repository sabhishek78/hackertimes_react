import React from "react";

import NewsCard from "../NewsCard1";
import NewsCard2 from "../NewsCard2";
import NewsCard3 from "../NewsCard3";

class NewsCardGrid extends React.Component {
    render() {
        return (
            <div>
                <div className="row1">
                    <div id="left-col">
                        <NewsCard newsItem={this.props.items[0]}/>
                    </div>
                    <div id="middle-col">
                        <NewsCard2 newsItem={this.props.items[1]}/>
                        <NewsCard2 newsItem={this.props.items[2]}/>
                        <NewsCard2 newsItem={this.props.items[3]}/>
                    </div>
                    <div id="right-col">
                        <NewsCard2 newsItem={this.props.items[4]}/>
                        <NewsCard2 newsItem={this.props.items[5]}/>
                        <NewsCard2 newsItem={this.props.items[6]}/>
                    </div>
                </div>
                <div className="row2">
                    <NewsCard2 newsItem={this.props.items[7]}/>
                    <NewsCard2 newsItem={this.props.items[8]}/>
                    <NewsCard2 newsItem={this.props.items[9]}/>
                    <NewsCard2 newsItem={this.props.items[10]}/>
                </div>
                <div className="row3">
                    <NewsCard2 newsItem={this.props.items[11]}/>
                    <NewsCard2 newsItem={this.props.items[12]}/>
                    <NewsCard2 newsItem={this.props.items[13]}/>
                    <NewsCard2 newsItem={this.props.items[14]}/>
                </div>
                <div className="row4">
                    <NewsCard3 newsItem={this.props.items[15]}/>
                    <NewsCard3 newsItem={this.props.items[16]}/>
                </div>
            </div>
        );
    }
}

export default NewsCardGrid;