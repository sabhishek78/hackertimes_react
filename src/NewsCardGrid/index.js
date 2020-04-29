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
                        {this.props.popularStory!==undefined&&<NewsCard newsItem={this.props.popularStory}/>}
                    </div>
                    <div id="middle-col">
                        {this.props.items[1]!==undefined&&<NewsCard2 newsItem={this.props.items[1]}/>}
                        {this.props.items[2]!==undefined&&<NewsCard2 newsItem={this.props.items[2]}/>}
                        {this.props.items[3]!==undefined&&<NewsCard2 newsItem={this.props.items[3]}/>}
                    </div>
                    <div id="right-col">
                        {this.props.items[4]!==undefined&&<NewsCard2 newsItem={this.props.items[4]}/>}
                        {this.props.items[5]!==undefined&&<NewsCard2 newsItem={this.props.items[5]}/>}
                        {this.props.items[6]!==undefined&&<NewsCard2 newsItem={this.props.items[6]}/>}
                    </div>
                </div>
                <div className="row2">
                    {this.props.items[7]!==undefined&&<NewsCard2 newsItem={this.props.items[7]}/>}
                    {this.props.items[8]!==undefined&&<NewsCard2 newsItem={this.props.items[8]}/>}
                    {this.props.items[9]!==undefined&&<NewsCard2 newsItem={this.props.items[9]}/>}
                    {this.props.items[10]!==undefined&&<NewsCard2 newsItem={this.props.items[10]}/>}
                </div>
                <div className="row3">
                    {this.props.items[11]!==undefined&&<NewsCard2 newsItem={this.props.items[11]}/>}
                    {this.props.items[12]!==undefined&&<NewsCard2 newsItem={this.props.items[12]}/>}
                    {this.props.items[13]!==undefined&&<NewsCard2 newsItem={this.props.items[13]}/>}
                    {this.props.items[14]!==undefined&&<NewsCard2 newsItem={this.props.items[14]}/>}
                </div>
                <div className="row4">
                    {this.props.items[15]!==undefined&&<NewsCard3 newsItem={this.props.items[15]}/>}
                    {this.props.items[15]!==undefined&&<NewsCard3 newsItem={this.props.items[16]}/>}
                </div>
            </div>
        );
    }
}

export default NewsCardGrid;