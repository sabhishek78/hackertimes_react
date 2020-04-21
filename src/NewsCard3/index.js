import React from "react";
import "./styles3.css";

class NewsCard3 extends React.Component {
    calculateTime(input) {
        var date = new Date();
        var timestamp = Math.floor((date.getTime()) / 1000);
        var diff = timestamp - input;
        return (Math.floor(diff / 3600));

    }

    getURL(url) {
        url = url.slice(8);
        let newURL = '';
        let i = 0;
        while (url[i] !== '/') {
            newURL = newURL + url[i];
            i++;
        }
        return newURL;
    }

    truncateString(htDescription) {
        if (htDescription !== undefined) {
            if (htDescription.length < 100) {
                return htDescription;
            } else {
                return htDescription.substring(0, 100) + "...";
            }
        } else {
            return "";
        }
    }

    render() {
        return (
            <div className="newsCard3" >
                <img className="newsCard3Image" src={this.props.newsItem.htImage}/>
                <div className="newsCard3TextSection">
                    <h3> {this.props.newsItem.title}</h3>
                    <p>{this.truncateString(this.props.newsItem.htDescription)}</p>
                    <div className="footer">
                        <a className="alignTextLeft" href={this.props.newsItem.url}>Source</a>
                        <div className="footerRow">
                            <div className="comments">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                                    <path
                                        d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
                                    <path d="M0 0h24v24H0z" fill="none"/>
                                </svg>
                                <div>{this.props.newsItem.comments === undefined ? 0 : this.props.newsItem.comments} comments</div>
                            </div>
                            <div>
                                {this.props.newsItem.score} points {this.calculateTime(this.props.newsItem.time)}hr ago
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewsCard3;